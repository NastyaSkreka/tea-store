'use client';
import MainLayout from '@/components/ui/Layouts/mainLayout';
import ExplorePage from '@/app/explore/_components';

export default function Explore() {
  return (
    <MainLayout color="var(--deepBlue-color)">
      <ExplorePage />
    </MainLayout>
  );
}