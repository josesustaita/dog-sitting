export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <div className="mt-6">{children}</div>
    </div>
  );
}
