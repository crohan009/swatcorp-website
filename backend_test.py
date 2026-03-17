import requests
import sys
import json
from datetime import datetime

class SWATCorpAPITester:
    def __init__(self, base_url="http://localhost:8001"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name, success, details="", error=""):
        """Log test results"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            
        result = {
            "test_name": name,
            "success": success,
            "details": details,
            "error": error,
            "timestamp": datetime.now().isoformat()
        }
        self.test_results.append(result)
        
        status = "✅ PASSED" if success else "❌ FAILED"
        print(f"\n🔍 {name}: {status}")
        if details:
            print(f"   Details: {details}")
        if error:
            print(f"   Error: {error}")

    def test_health_endpoint(self):
        """Test the health check endpoint"""
        try:
            url = f"{self.base_url}/api/health"
            response = requests.get(url, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "status" in data and data["status"] == "healthy":
                    self.log_test(
                        "Health Check",
                        True,
                        f"Status: {response.status_code}, Health: {data['status']}"
                    )
                    return True
                else:
                    self.log_test(
                        "Health Check",
                        False,
                        f"Status: {response.status_code}",
                        f"Invalid health response: {data}"
                    )
                    return False
            else:
                self.log_test(
                    "Health Check",
                    False,
                    f"Status: {response.status_code}",
                    f"Expected 200, got {response.status_code}"
                )
                return False
                
        except Exception as e:
            self.log_test(
                "Health Check",
                False,
                error=f"Connection error: {str(e)}"
            )
            return False

    def test_contact_form_submission(self):
        """Test contact form submission"""
        try:
            url = f"{self.base_url}/api/contact"
            test_data = {
                "name": "Test User",
                "email": "test@example.com", 
                "message": "This is a test message from the automated testing suite."
            }
            
            headers = {'Content-Type': 'application/json'}
            response = requests.post(url, json=test_data, headers=headers, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and data.get("message") and data.get("id"):
                    self.log_test(
                        "Contact Form Submission",
                        True,
                        f"Status: {response.status_code}, ID: {data['id']}"
                    )
                    return data["id"]
                else:
                    self.log_test(
                        "Contact Form Submission", 
                        False,
                        f"Status: {response.status_code}",
                        f"Invalid response format: {data}"
                    )
                    return None
            else:
                self.log_test(
                    "Contact Form Submission",
                    False,
                    f"Status: {response.status_code}",
                    f"Expected 200, got {response.status_code}"
                )
                return None
                
        except Exception as e:
            self.log_test(
                "Contact Form Submission",
                False,
                error=f"Request error: {str(e)}"
            )
            return None

    def test_contact_form_validation(self):
        """Test contact form validation with invalid data"""
        try:
            url = f"{self.base_url}/api/contact"
            
            # Test missing email
            invalid_data = {
                "name": "Test User",
                "message": "Test message"
                # email missing
            }
            
            headers = {'Content-Type': 'application/json'}
            response = requests.post(url, json=invalid_data, headers=headers, timeout=10)
            
            if response.status_code in [400, 422]:  # Validation error expected
                self.log_test(
                    "Contact Form Validation",
                    True,
                    f"Correctly rejected invalid data with status: {response.status_code}"
                )
                return True
            else:
                self.log_test(
                    "Contact Form Validation",
                    False,
                    f"Status: {response.status_code}",
                    f"Expected 400/422 for invalid data, got {response.status_code}"
                )
                return False
                
        except Exception as e:
            self.log_test(
                "Contact Form Validation",
                False,
                error=f"Request error: {str(e)}"
            )
            return False

    def test_get_contacts_endpoint(self):
        """Test the get contacts endpoint"""
        try:
            url = f"{self.base_url}/api/contacts"
            response = requests.get(url, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "contacts" in data and isinstance(data["contacts"], list):
                    self.log_test(
                        "Get Contacts",
                        True,
                        f"Status: {response.status_code}, Contacts count: {len(data['contacts'])}"
                    )
                    return True
                else:
                    self.log_test(
                        "Get Contacts",
                        False,
                        f"Status: {response.status_code}",
                        f"Invalid response format: {data}"
                    )
                    return False
            else:
                self.log_test(
                    "Get Contacts",
                    False,
                    f"Status: {response.status_code}",
                    f"Expected 200, got {response.status_code}"
                )
                return False
                
        except Exception as e:
            self.log_test(
                "Get Contacts",
                False,
                error=f"Request error: {str(e)}"
            )
            return False

    def test_cors_headers(self):
        """Test CORS headers are present"""
        try:
            url = f"{self.base_url}/api/health"
            response = requests.get(url, timeout=10)
            
            cors_header = response.headers.get('Access-Control-Allow-Origin')
            if cors_header:
                self.log_test(
                    "CORS Headers",
                    True,
                    f"CORS header present: {cors_header}"
                )
                return True
            else:
                self.log_test(
                    "CORS Headers",
                    False,
                    error="No Access-Control-Allow-Origin header found"
                )
                return False
                
        except Exception as e:
            self.log_test(
                "CORS Headers",
                False,
                error=f"Request error: {str(e)}"
            )
            return False

    def run_all_tests(self):
        """Run all API tests"""
        print("🚀 Starting SWAT Corp API Testing...")
        print(f"📍 Base URL: {self.base_url}")
        print("=" * 60)

        # Test health endpoint first
        health_ok = self.test_health_endpoint()
        
        if not health_ok:
            print("\n❌ Health check failed, stopping tests")
            return self.generate_summary()

        # Run other tests
        self.test_contact_form_submission()
        self.test_contact_form_validation()
        self.test_get_contacts_endpoint()
        self.test_cors_headers()

        return self.generate_summary()

    def generate_summary(self):
        """Generate test summary"""
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        print(f"Total Tests: {self.tests_run}")
        print(f"Passed: {self.tests_passed}")
        print(f"Failed: {self.tests_run - self.tests_passed}")
        print(f"Success Rate: {(self.tests_passed/self.tests_run)*100:.1f}%" if self.tests_run > 0 else "0%")
        
        if self.tests_passed == self.tests_run:
            print("\n🎉 All tests passed!")
            return 0
        else:
            print("\n⚠️  Some tests failed - check the details above")
            return 1

def main():
    tester = SWATCorpAPITester()
    return tester.run_all_tests()

if __name__ == "__main__":
    sys.exit(main())