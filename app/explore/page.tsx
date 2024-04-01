'use client';
import MainLayout from '@/components/ui/mainLayout';
import ExplorePage from '@/components/AuthPages/ExplorePage';

export default function Explore() {
  return (
    <MainLayout color="var(--deepBlue-color)">
      <ExplorePage />
    </MainLayout>
  );
}
