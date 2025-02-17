const express = require('express');
const router = express.Router();
const { registerUser } = require('../../controllers/auth/emailauth');

/*------------------------register routes--------------------------------*/
// Registering user
router.route('/register').post(registerUser);
// Register admin
// router.route('/registerAdmin').post(registerAdmin);

// ----------------------Verify Token-------------------------
// router.route('/verify-account/:token').post(verifyAccount);

// -----------resend Verification-token-----------
// router.route('/resend-registration-mail').post(resendVerifyAccountMail);

/*------------------------login routes--------------------------------*/
// User login route
// router.route('/login').post(login);

// SuperAdmin and admin Routes
// router.route('/adminLogin').post(adminLogin);

// EditRole
// router.route('/editUser').put(editUser);
// Delete user
// router.route('/deleteUser').delete(deleteUser);

// ============isAuthenticated=============
// router.route('/isAuthenticated').post(isAuthenticated);

// Logout
// router.route('/logout').post(logout);

// ====================Password Reset Mail======================
// router.route('/password-reset').post(passwordResetMail);
// router.route('/update-password').post(updatePassword);

module.exports = router;