import Link from "next/link";

export default function Dash() {
  return (
    <div className="Dash">
      <h1>Dash</h1>
      <p>
        This is the Dash page. Nothing to see, go <Link href="/">home</Link>.
      </p>
    </div>
  );
}
