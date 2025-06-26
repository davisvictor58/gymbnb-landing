export default function SignupForm() {
  return (
    <section className="py-16 px-4 w-full max-w-md text-center">
      <h2 className="text-2xl font-semibold mb-4">Join the Waitlist</h2>
      <form
        action="https://formspree.io/f/xnnvolon" // replace with your Formspree ID
        method="POST"
        className="flex flex-col space-y-4"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Your email"
          className="p-2 border rounded-xl"
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-xl">
          Join Waitlist
        </button>
      </form>
    </section>
  );
}