const steps = [
  {
    title: "Submit your requirements.",
    body: "Describe what you want built, your timeline and your budget.",
  },
  {
    title: "Keep everything in one place.",
    body: "Your requests and conversations stay together in a secure workspace.",
  },
  {
    title: "Follow progress to completion.",
    body: "See where each project stands from first conversation to delivery.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how">
      <h2>How it works</h2>
      <ol>
        {steps.map((step) => (
          <li key={step.title}>
            <strong>{step.title}</strong> {step.body}
          </li>
        ))}
      </ol>
    </section>
  );
}
