import Link from "next/link";

type AppShellProps = {
  children: React.ReactNode;
  active: "admin" | "merchants" | "payments" | "checkout";
};

const links = [
  { href: "/admin", label: "Admin", key: "admin" },
  { href: "/admin/merchants", label: "Marchands", key: "merchants" },
  { href: "/admin/payments", label: "Paiements", key: "payments" },
  { href: "/checkout/demo", label: "Checkout", key: "checkout" }
] as const;

export function AppShell({ children, active }: AppShellProps) {
  return (
    <div className="shell">
      <aside className="sidebar">
        <Link className="brand" href="/admin">
          <span className="brand-mark">L</span>
          <span>
            LNS Pay
            <span>Checkout & processing</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Navigation principale">
          {links.map((link) => (
            <Link className={active === link.key ? "active" : ""} href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="side-note">
          Stripe reste un rail technique cote serveur. Le marchand et l'acheteur voient LNS Pay.
        </div>
      </aside>
      <main className="main">{children}</main>
    </div>
  );
}
