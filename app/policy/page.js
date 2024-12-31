export const metadata = {
    title: "Helpmeai",
    description: "Helpmeai policy page.",
};

export default function Policy() {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy for HelpMeAI</h1>
            <p className="text-gray-600 mb-4">Effective Date: 31/12/2024</p>
            <p className="mb-4">Welcome to HelpMeAI! Your privacy is important to us. This Privacy Policy outlines how we handle your data and protect your privacy when using our website and Chrome extension.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Do Not Collect</h2>
            <p className="mb-2">HelpMeAI does not collect, store, or share any personal data.</p>
            <ul className="list-disc list-inside mb-4">
                <li>We do not track user behavior.</li>
                <li>We do not gather browsing history, extension usage, or any identifiable information.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">2. Third-Party Services</h2>
            <p className="mb-4">HelpMeAI does not integrate with or share data with any third-party services. As such, no data is transmitted outside your device.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">3. Cookies</h2>
            <p className="mb-4">Our website does not use cookies to track or store any information.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Security</h2>
            <p className="mb-4">Although we do not collect data, we ensure that our extension operates securely within the permissions it requires. HelpMeAI is designed to run locally on your device without transmitting information externally.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">5. Children's Privacy</h2>
            <p className="mb-4">HelpMeAI is not intended for use by children under the age of 13. Since we do not collect data, we do not knowingly collect information from children.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Control</h2>
            <p className="mb-4">As we do not collect data, there are no settings or preferences needed for data management. You remain in full control of your browsing experience.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">7. Changes to This Privacy Policy</h2>
            <p className="mb-4">We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated policy will always be available on our website.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
            <p className="mb-4">If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <p className="mb-4">Email: [Insert Contact Email]</p>
            <p className="mb-4">Website: [Insert Website URL]</p>
            <p className="mt-4">Thank you for choosing HelpMeAI. We are committed to providing a secure and private experience for all our users.</p>
        </div>
    )
}