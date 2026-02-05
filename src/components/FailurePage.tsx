import { useLocation, useNavigate } from 'react-router-dom';
import { XCircle, RefreshCcw, ArrowLeft } from 'lucide-react';

export default function FailurePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan;

  if (!plan) {
    navigate('/');
    return null;
  }

  const handleRetry = () => {
    navigate('/checkout', { state: { plan } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
            <XCircle className="w-12 h-12 text-red-500" />
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Payment didn't go through
          </h1>

          <p className="text-lg text-slate-600 mb-8">
            Don't worry — your card hasn't been charged. Let's try that again.
          </p>

          <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-semibold text-slate-900 mb-4">Common causes:</h3>
            <ul className="space-y-3 text-slate-700 text-sm">
              <li className="flex items-start">
                <span className="text-slate-400 mr-3 mt-0.5">→</span>
                <span>Card details don't match what your bank has on file</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-400 mr-3 mt-0.5">→</span>
                <span>Insufficient funds or credit available</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-400 mr-3 mt-0.5">→</span>
                <span>Your bank is blocking the transaction</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-400 mr-3 mt-0.5">→</span>
                <span>Try a different payment method or contact your bank</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-xl border border-amber-200 p-6 mb-8">
            <h4 className="font-semibold text-amber-900 mb-2">Still stuck?</h4>
            <p className="text-sm text-amber-800">
              Our support team is here to help. Email us at support@example.com or contact your bank.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 active:bg-slate-100 transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Try different plan
            </button>
            <button
              onClick={handleRetry}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 active:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <RefreshCcw className="w-5 h-5" />
              Try again
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Your card has not been charged. You can safely retry the payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
