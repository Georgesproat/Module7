import Link from "next/link";

export default function Hello() {
  return (
    <div className="Hello">
      <h1>Hello</h1>
      <p>
        This is the hello page. Nothing to see, go <Link href="/">home</Link>.
      </p>
    </div>
  );
}
