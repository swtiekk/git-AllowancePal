function AdminLogin() {
  const adminAccount = {
    email: "admin@allowancepal.com",
    role: "System Administrator"
  };

  const loginMessage = "Please enter your admin credentials.";

  return (
    <>
      <header>
        <h1>AllowancePal</h1>
        <p>Admin Login</p>
      </header>

      <main>
        <section>
          <h2>{adminAccount.role}</h2>
          <p>{loginMessage}</p>

          <form>
            <label>
              Email:
              <input type="email" placeholder="admin@allowancepal.com" />
            </label>

            <br /><br />

            <label>
              Password:
              <input type="password" placeholder="••••••••" />
            </label>

            <br /><br />

            <button type="submit">Login</button>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2026 AllowancePal Admin Panel</p>
      </footer>
    </>
  );
}

export default AdminLogin;
