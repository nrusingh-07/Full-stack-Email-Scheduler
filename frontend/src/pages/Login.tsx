function Login() {
  const handleGoogleLogin = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "Oliver Brown",
        email: "oliver.brown@domain.io",
        avatar: "https://i.pravatar.cc/150?img=3",
      })
    );

    window.location.href = "/dashboard";
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        <button className="google-login-btn" onClick={handleGoogleLogin}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
          />
          <span>Login with Google</span>
        </button>

        <div className="divider">or sign in with email</div>

        <input type="email" placeholder="Email ID" disabled />
        <input type="password" placeholder="Password" disabled />

        <button className="login-btn" disabled>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
