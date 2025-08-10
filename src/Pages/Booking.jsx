import { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaCut, FaClock } from "react-icons/fa";
import { Scissors, ExternalLink } from "lucide-react";

export default function BookingForm() {
  const [showWidget, setShowWidget] = useState(false);

  // Fresha business URL
  const FRESHA_BOOKING_URL =
    "https://www.fresha.com/p/emmanuel-asamoah-5568781?share=true&pId=2510665";

  return (
    <section id="booking" className="py-20 ">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 cinzel">
            Book Your <span className="text-amber-400">Appointment</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl text-lg mx-auto bellefair">
            Schedule your next haircut with our professional barbers. Choose
            your preferred service, barber, and time slot.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Booking Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-amber-400 text-white p-6 flex items-center">
                <FaCalendarAlt className="text-2xl mr-4" />
                <h3 className="text-xl font-bold cinzel">
                  Schedule Your Visit
                </h3>
              </div>

              {!showWidget ? (
                <div className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                      <FaCalendarAlt className="text-amber-400 w-8 h-8" />
                    </div>
                    <h4 className="text-xl bellefair font-bold text-gray-500 mb-3">
                      Ready to Book?
                    </h4>
                    <p className="text-gray-600 mb-6 text-lg bellefair">
                      Click below to access our online booking system powered by
                      Fresha. You'll be able to see real-time availability and
                      book instantly.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={() => setShowWidget(true)}
                      className="w-full bg-amber-400 text-white bellefair py-4 px-6 rounded-lg font-medium transition-all transform hover:bg-amber-500 hover:scale-105 flex items-center justify-center"
                    >
                      <FaCalendarAlt className="mr-2" />
                      Open Booking System
                    </button>

                    <p className="text-sm text-gray-500">
                      Or{" "}
                      <a
                        href={FRESHA_BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 hover:text-amber-500 underline text-base bellefair inline-flex items-center"
                      >
                        visit our Fresha page directly
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-amber-500 cinzel">
                      Book Your Appointment
                    </h4>
                    <button
                      onClick={() => setShowWidget(false)}
                      className="text-gray-500 hover:text-gray-700 text-sm underline"
                    >
                      Close
                    </button>
                  </div>

                  {/* Fresha Widget Iframe */}
                  <div className="relative w-full h-[600px] rounded-lg overflow-hidden border border-amber-200">
                    <iframe
                      src={FRESHA_BOOKING_URL}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Book Appointment"
                      className="rounded-lg"
                    />
                  </div>

                  <p className="text-sm md:text-xl text-gray-500 mt-2 text-center bellefair">
                    Having trouble? Try opening in a{" "}
                    <a
                      href={FRESHA_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-500 underline"
                    >
                      new window
                    </a>
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Information Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
              <div className="bg-amber-400 text-white p-6 flex items-center">
                <FaCalendarAlt className="text-2xl mr-4" />
                <h3 className="text-xl font-bold cinzel">Booking Info</h3>
              </div>

              <div className="p-6">
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h4 className="font-semibold mb-2 cinzel flex items-center text-amber-500">
                    <Scissors className="w-4 h-4 mr-2 text-amber-400" />
                    Why Book with Fresha?
                  </h4>
                  <ul className="text-sm sm:text-md text-gray-900 space-y-2 bellefair">
                    <li>• Real-time availability</li>
                    <li>• Instant confirmation</li>
                    <li>• Easy rescheduling</li>
                    <li>• Automatic reminders</li>
                    <li>• Secure payment processing</li>
                  </ul>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg border border-amber-200 mt-4">
                  <h4 className="font-semibold mb-2 flex cinzel items-center text-amber-500">
                    <Scissors className="w-4 h-4 mr-2 text-amber-400" />
                    Booking Policy
                  </h4>
                  <ul className="text-sm sm:text-md text-gray-900 space-y-2 bellefair">
                    <li>
                      • Please arrive 5-10 minutes before your appointment
                    </li>
                    <li>
                      • Cancellations should be made at least 3 hours in advance
                    </li>
                    <li>• Late arrivals may result in reduced service time</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
