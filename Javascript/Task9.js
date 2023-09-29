<!DOCTYPE html>
<html>
<head>
  <title>Registration Form</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #A22A57;
      margin: 0;
      padding: 0;
      color: white;
    }

    .container {
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
      padding-right: 40px;
      background-color: #752041;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      margin-top: 50px;
    }

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .form-group input[type="text"],
    .form-group input[type="email"],
    .form-group input[type="password"],
    .form-group input[type="tel"],
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    .form-group textarea {
      height: 80px;
    }

    .form-group label.radio {
      display: inline-block;
      margin-right: 10px;
    }

    .form-group button {
      width: 100%;
      padding: 10px;
      background-color: #3897f0;
      border: none;
      border-radius: 3px;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
    }

    .form-group button:hover {
      background-color: #3366cc;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Registration Form</h1>
    <form id="registration-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" placeholder="Enter your phone number" required>
      </div>
      <div class="form-group">
        <label>Gender</label>
        <label class="radio">
          <input type="radio" name="gender" value="male" checked> Male
        </label>
        <label class="radio">
          <input type="radio" name="gender" value="female"> Female
        </label>
        <label class="radio">
          <input type="radio" name="gender" value="other"> Other
        </label>
      </div>
      <div class="form-group">
        <label for="language">Language</label>
        <select id="language" required>
          <option value="">Select your language</option>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          <!-- Add more language options as needed -->
        </select>
      </div>
      <div class="form-group">
        <label for="zipcode">Zip Code</label>
        <input type="text" id="zipcode" placeholder="Enter your zip code" required>
      </div>
      <div class="form-group">
        <label for="about">About</label>
        <textarea id="about" placeholder="Tell us about yourself"></textarea>
      </div>
      <div class="form-group">
        <button type="submit">Register</button>
      </div>
    </form>
  </div>

  <script>
    document.getElementById('registration-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // Perform form submission and validation logic here
      // You can access form values using document.getElementById('<element-id>').value
    });
  </script>
</body>
</html>
