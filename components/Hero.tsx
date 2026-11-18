import { Button, ButtonLink } from "./Button";

export default function Hero() {
  return (
    <section className="hero">
      <p className="eyebrow">Project intake, organised</p>

      <h1>Turn a project idea into a clear starting point.</h1>

      <p className="lead">
        Submit project requirements, keep your requests in one secure workspace,
        and follow each project from first conversation to completion.
      </p>

      <div className="actions">
        <Button>Continue with Google</Button>
        <ButtonLink href="#how-it-works">How it works</ButtonLink>
      </div>
    </section>
  );
}
