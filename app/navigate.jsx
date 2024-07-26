'use client';

import { useRouter } from 'next/navigation';

export default function DeleteButton({ id }) {
  const router = useRouter();

  async function handleDelete() {
    await deleteItem(id);
    router.push('/items'); // Navigate to items page
    // or
    router.refresh(); // Refresh the current page
  }

  return <button onClick={handleDelete}>Delete</button>;
}