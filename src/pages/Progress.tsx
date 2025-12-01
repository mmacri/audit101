import { Layout } from '@/components/layout/Layout';
import { PageIntro } from '@/components/PageIntro';
import { ProgressDashboard } from '@/components/ProgressDashboard';
import { TrendingUp } from 'lucide-react';

export default function Progress() {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Progress Dashboard
            </h1>
          </div>

          {/* Page Intro */}
          <div className="max-w-2xl mx-auto mb-10">
            <PageIntro>
              Track your learning journey across all audit frameworks. View your completed paths,
              continue where you left off, and discover personalized recommendations based on your progress.
            </PageIntro>
          </div>

          {/* Dashboard */}
          <div className="max-w-5xl mx-auto">
            <ProgressDashboard />
          </div>
        </div>
      </section>
    </Layout>
  );
}
