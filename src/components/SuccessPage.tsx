import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan;

  if (!plan) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl border border-green-200 p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            You're all set
          </h1>

          <p className="text-lg text-slate-600 mb-8">
            Your {plan.name} plan is active. Your 14-day trial has begun — no charges yet.
          </p>

          <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-slate-900">Subscription Details</h3>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                Active
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Plan</span>
                <span className="font-semibold text-slate-900">{plan.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Amount</span>
                <span className="font-semibold text-slate-900">${plan.price}/month</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Billing cycle</span>
                <span className="font-semibold text-slate-900">Monthly</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Next billing date</span>
                <span className="font-semibold text-slate-900">
                  {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 mb-8">
            <h4 className="font-semibold text-blue-900 mb-2">Next steps</h4>
            <ul className="text-sm text-blue-800 space-y-2 text-left">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Check your email for a confirmation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Start using your account immediately</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Your card will be charged when the trial ends</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 active:bg-slate-100 transition-all duration-150"
            >
              Back to Home
            </button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 active:bg-blue-700 transition-all duration-150 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
              Start using your account
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
