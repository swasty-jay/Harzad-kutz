import { Calendar, Scissors, ExternalLink, Clock } from "lucide-react";

export default function BookingForm() {
  // Fresha URLs
  const FRESHA_BOOKING_URL =
    "https://www.fresha.com/p/emmanuel-asamoah-5568781?share=true&pId=2510665";

  const openFresha = () => {
    // Try to open in a popup first, fallback to new tab
    const popup = window.open(
      FRESHA_BOOKING_URL,
      "freshaBooking",
      "width=900,height=750,scrollbars=yes,resizable=yes,toolbar=no,location=no,status=no,menubar=no"
    );

    // If popup is blocked, fallback to new tab
    if (!popup || popup.closed || typeof popup.closed === "undefined") {
      window.open(FRESHA_BOOKING_URL, "_blank");
    }
  };

  const redirectToFresha = () => {
    window.location.href = FRESHA_BOOKING_URL;
  };

  return (
    <section
      id="booking"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cinzel text-gray-800">
            Book Your <span className="text-amber-400">Appointment</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl text-lg mx-auto bellefair leading-relaxed">
            Experience premium barbering services with our skilled
            professionals. Choose your preferred booking method below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Booking Section */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-8">
              <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white p-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <Calendar className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold cinzel">
                      Online Booking
                    </h3>
                    <p className="text-amber-50 bellefair">
                      Book instantly with Fresha
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Calendar className="text-white w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4 cinzel">
                    Secure Online Booking
                  </h4>
                  <p className="text-gray-600 max-w-lg mx-auto bellefair text-lg leading-relaxed">
                    Access our professional booking system with real-time
                    availability, instant confirmations, and secure payment
                    processing.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Popup Option */}
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl border-2 border-amber-200 hover:shadow-lg transition-all duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                        <ExternalLink className="w-8 h-8 text-white" />
                      </div>
                      <h5 className="font-bold mb-3 cinzel text-gray-800 text-lg">
                        Quick Access
                      </h5>
                      <p className="text-gray-700 mb-6 bellefair">
                        Opens our booking system in a convenient popup window
                        while keeping you on our site.
                      </p>
                      <button
                        onClick={openFresha}
                        className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-white py-2 px-2 md:py-4 md:px-4 rounded-xl font-semibold hover:from-amber-500 hover:to-amber-600 transition-all duration-300 flex items-center justify-center shadow-lg bellefair text-sm  sm:text-lg md:text-xl"
                      >
                        <Calendar className="w-5 h-5 mr-2" />
                        Launch Booking System
                      </button>
                    </div>
                  </div>

                  {/* Direct Redirect Option */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 hidden md:block rounded-2xl border-2 border-blue-200 hover:shadow-lg transition-all duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                        <ExternalLink className="w-8 h-8 text-white" />
                      </div>
                      <h5 className="font-bold mb-3 cinzel text-gray-800 text-lg">
                        Full Experience
                      </h5>
                      <p className="text-gray-700 mb-6 bellefair">
                        Access the complete Fresha platform with all features
                        and full mobile optimization.
                      </p>
                      <button
                        onClick={redirectToFresha}
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg bellefair text-lg"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Go to Fresha
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Information Panel */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full border border-gray-100">
              <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white p-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    <Calendar className="text-lg" />
                  </div>
                  <h3 className="text-xl font-bold cinzel">
                    Booking Information
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Online Benefits */}
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200">
                  <h4 className="font-semibold mb-2 cinzel flex items-center text-amber-500">
                    <Scissors className="w-4 h-4 mr-2 text-amber-400" />
                    Why Book with Fresha?{" "}
                  </h4>{" "}
                  <ul className="text-sm sm:text-md text-gray-900 space-y-2 bellefair">
                    <li>• Real-time availability</li>
                    <li>• Instant confirmation</li>
                    <li>• Easy rescheduling</li>
                    <li>• Automatic reminders</li>
                    <li>• Secure payment processing</li>{" "}
                  </ul>{" "}
                </div>

                {/* Policies */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold mb-4 flex items-center text-gray-700 cinzel">
                    <Clock className="w-5 h-5 mr-2 text-gray-500" />
                    Professional Standards
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-3 bellefair">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Please arrive 10 minutes before your scheduled time
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Cancellations require 4+ hours advance notice
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Late arrivals may result in shortened service time
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
