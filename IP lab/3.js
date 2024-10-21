function validateField(fieldId, errorMessage) {
    const field = document.getElementById(fieldId);
    if (field.value.trim() === '') {
      document.getElementById(`${fieldId}Error`).innerHTML = errorMessage;
      return false;
    }
    return true;
  }
  
  function validateForm(event) {
    event.preventDefault();
    let isValid = true;
  
    // Reset error messages
    document.querySelectorAll('.error').forEach((e) => (e.innerHTML = ''));
  
    // Get form values
    const studentName = document.getElementById('studentName').value.trim();
    const rollNo = document.getElementById('rollNo').value.trim();
    const gender = document.getElementById('gender').value.trim();
    const year = document.getElementById('year').value.trim();
    const department = document.getElementById('department').value.trim();
    const section = document.getElementById('section').value.trim();
    const mobileNo = document.getElementById('mobileNo').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const country = document.getElementById('country').value.trim();
    const pincode = document.getElementById('pincode').value.trim();
  
    // Basic validation checks
    isValid = validateField('studentName', 'Student Name is required') && isValid;
    isValid = validateField('rollNo', 'Roll No is required') && isValid;
    isValid = validateField('gender', 'Gender is required') && isValid;
    isValid = validateField('year', 'Year is required') && isValid;
    isValid = validateField('department', 'Department is required') && isValid;
    isValid = validateField('section', 'Section is required') && isValid;
    isValid = validateField('mobileNo', 'Mobile No is required') && isValid;
    isValid = validateField('email', 'E-Mail ID is required') && isValid;
    isValid = validateField('address', 'Address is required') && isValid;
    isValid = validateField('city', 'City is required') && isValid;
    isValid = validateField('country', 'Country is required') && isValid;
    isValid = validateField('pincode', 'Pincode is required') && isValid;
  
    // Additional validation for mobile number and email
    if (mobileNo !== '' && !/^\d{10}$/.test(mobileNo)) {
      document.getElementById('mobileError').innerHTML = 'Invalid Mobile No';
      isValid = false;
    }
  
    if (email !== '' && !/\S+@\S+\.\S+/.test(email)) {
      document.getElementById('emailError').innerHTML = 'Invalid E-Mail ID';
      isValid = false;
    }
  
    // Additional validation for pincode
    if (pincode !== '' && !/^\d{6}$/.test(pincode)) {
      document.getElementById('pincodeError').innerHTML = 'Invalid Pincode';
      isValid = false;
    }
  
    return isValid;
  }