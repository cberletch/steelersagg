// app/page.tsx
import CreateTag from './components/CreateTag';

export default function Home() {
  return (
    <div>
      <h1>Create a new tag</h1>
      <CreateTag />
    </div>
  );
}