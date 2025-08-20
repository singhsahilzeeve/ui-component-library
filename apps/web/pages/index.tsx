import { Button } from '@repo/ui';

export default function Home() {
  return (
    <div className="p-4">
      <Button label="Click me" action={() => alert('Hello')} status="idle" />
    </div>
  );
}
