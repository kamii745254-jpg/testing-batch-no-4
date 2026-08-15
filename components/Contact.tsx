'use client';

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Have questions? We would love to hear from you. Reach out and our team will get back to you within 24 hours.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">support@airevenuerecovery.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Office</h3>
              <p className="text-gray-600">123 AI Street, Tech City, TC 90210</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
