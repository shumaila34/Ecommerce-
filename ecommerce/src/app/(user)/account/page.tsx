export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Account</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 text-lg">
          Welcome to your account page. Here you can manage your profile and preferences.
          Currently, this is a placeholder page. The account functionality will be implemented soon.
        </p>
        <p className="text-gray-500 mt-4">
          Features coming soon:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-500">
          <li>Profile management</li>
          <li>Order history</li>
          <li>Shipping addresses</li>
          <li>Payment methods</li>
          <li>Account settings</li>
          <li>Privacy preferences</li>
        </ul>
      </div>
    </div>
  );
}