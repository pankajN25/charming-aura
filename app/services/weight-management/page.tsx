import type { Metadata } from 'next'
import { WeightManagementClient } from './weight-management-client'

export const metadata: Metadata = {
  title: 'Weight Management Program | Personalized Diet Plans | Charming Aura Wellness',
  description: 'Lose weight sustainably with our personalized nutrition plans. 12-18kg average weight loss in 4 months. 95% success rate. Free consultation today!',
  keywords: 'weight loss, weight management, diet plans, nutrition coaching, sustainable weight loss, personalized diet',
}

export default function WeightManagementPage() {
  return <WeightManagementClient />
}
