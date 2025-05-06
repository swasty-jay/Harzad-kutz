import { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaCut, FaClock } from "react-icons/fa";
import { Scissors, Check } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    barber: "",
    date: "",
    time: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { id: "Duo experience", name: "Haircut", price: "₵100" },
    { id: "fade", name: "Taper Fade", price: "₵60" },
    // { id: "fade", name: "Taper Fade", price: "3,000" },
    { id: "beard", name: "Beard Trim", price: "₵40" },
    { id: "family package", name: "Family package", price: "₵500" },
    { id: "elite experience", name: "Elite Experience", price: "₵300" },
    { id: "design", name: "Hair Dye", price: "₵120" },
    { id: "kids", name: "Kids Cut", price: "₵50" },
  ];

  const barbers = [
    { id: "emmanuel", name: "Emmanuel" },
    { id: "mike", name: "Mike" },
    // { id: "dave", name: "Dave" },
  ];

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when field is being edited
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.service) errors.service = "Please select a service";
    if (!formData.barber) errors.barber = "Please select a barber";
    if (!formData.date) errors.date = "Please select a date";
    if (!formData.time) errors.time = "Please select a time";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);

      // Prepare data for email
      const emailData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service:
          services.find((s) => s.id === formData.service)?.name ||
          formData.service,
        barber:
          barbers.find((b) => b.id === formData.barber)?.name ||
          formData.barber,
        date: formData.date,
        time: formData.time,
        message: formData.message || "No additional message",
      };

      // Send email using EmailJS
      emailjs
        .send(
          "service_8wx6qy7", // Replace with your EmailJS service ID
          "template_3vceqrb", // Replace with your EmailJS template ID
          emailData,
          "o51dHNuIWoCqdooiR" // Replace with your EmailJS public key
        )
        .then(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);

          // Reset form after submission
          setFormData({
            name: "",
            phone: "",
            email: "",
            service: "",
            barber: "",
            date: "",
            time: "",
            message: "",
          });

          // Reset success message after 5 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        })
        .catch((error) => {
          console.error("Email sending failed:", error);
          setIsSubmitting(false);
          toast.error("Oops! Something went wrong. Please try again.");
        });
    }
  };

  // Get tomorrow's date in YYYY-MM-DD format for min date attribute
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  // Get date 30 days from now for max date attribute
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  return (
    <section
      id="booking"
      className="py-20 bg-gradient-to-b from-amber-50 to-amber-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Book Your <span className="text-amber-600">Appointment</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Schedule your next haircut with our professional barbers. Choose
            your preferred service, barber, and time slot.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-amber-600 text-white p-6 flex items-center">
                <FaCalendarAlt className="text-2xl mr-4" />
                <h3 className="text-xl font-bold">Schedule Your Visit</h3>
              </div>

              {isSubmitted ? (
                // <div className="p-8 flex flex-col items-center justify-center">
                //   <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                //     <Check className="text-amber-600 w-8 md:w-10 h-8 md:h-10" />
                //   </div>
                //   <h4 className="text-xl font-bold text-gray-800 mb-2">
                //     Booking Confirmed!
                //   </h4>
                //   <p className="text-gray-600 text-center mb-4">
                //     We've received your appointment request and will send you a
                //     confirmation email shortly.
                //   </p>
                //   <button
                //     onClick={() => setIsSubmitted(false)}
                //     className="text-amber-600 underline hover:text-amber-700 transition-colors"
                //   >
                //     Make another booking
                //   </button>
                // </div>
                toast.success(
                  "Booking Confirmed! We've received your appointment request and will send you a confirmation email shortly.",
                  {
                    duration: 5000,
                    icon: <Check className="text-amber-600 w-8 h-8" />,
                    style: {
                      background: "#fff",
                      color: "#333",
                      borderRadius: "10px",
                      padding: "20px",
                      fontSize: "16px",
                    },
                  }
                )
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {/* Personal Details */}
                  <div className="md:col-span-2">
                    <h4 className="text-lg font-semibold text-amber-800 mb-4">
                      Personal Details
                    </h4>
                  </div>

                  <div>
                    <label className="block text-gray-900 mb-2" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full border ${
                        formErrors.name ? "border-red-500" : "border-amber-300"
                      } rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-amber-500 transition-all`}
                      placeholder="Your name"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-900 mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full border ${
                        formErrors.phone ? "border-red-500" : "border-amber-300"
                      } rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-amber-500 transition-all`}
                      placeholder="Your phone number"
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-gray-900 mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full border ${
                        formErrors.email ? "border-red-500" : "border-amber-300"
                      } rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-amber-500 transition-all`}
                      placeholder="Your email address"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Service Selection */}
                  <div className="md:col-span-2 pt-4 border-t border-amber-100">
                    <h4 className="text-lg font-semibold text-amber-800 mb-4">
                      Service Details
                    </h4>
                  </div>

                  <div>
                    <label
                      className="block text-gray-900 mb-2"
                      htmlFor="service"
                    >
                      Select Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full border ${
                        formErrors.service
                          ? "border-red-500"
                          : "border-amber-300"
                      } rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-amber-500 transition-all`}
                    >
                      <option value="" className="font-[inter]">
                        Choose a service
                      </option>
                      {services.map((service) => (
                        <option
                          key={service.id}
                          value={service.id}
                          className="font-[inter]"
                        >
                          {service.name} - {service.price}
                        </option>
                      ))}
                    </select>
                    {formErrors.service && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-gray-900 mb-2"
                      htmlFor="barber"
                    >
                      Select Barber
                    </label>
                    <select
                      id="barber"
                      name="barber"
                      value={formData.barber}
                      onChange={handleChange}
                      className={`w-full border ${
                        formErrors.barber
                          ? "border-red-500"
                          : "border-amber-300"
                      } rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-amber-500 transition-all`}
                    >
                      <option value="">Choose a barber</option>
                      {barbers.map((barber) => (
                        <option key={barber.id} value={barber.id}>
                          {barber.name}
                        </option>
                      ))}
                    </select>
                    {formErrors.barber && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.barber}
                      </p>
                    )}
                  </div>

                  {/* Date and Time */}
                  <div className="md:col-span-2 pt-4 border-t border-amber-100">
                    <h4 className="text-lg font-semibold text-amber-800 mb-4">
                      Date & Time
                    </h4>
                  </div>

                  <div>
                    <label className="block text-gray-900 mb-2" htmlFor="date">
                      Select Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      min={minDate}
                      max={maxDateStr}
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full border ${
                        formErrors.date ? "border-red-500" : "border-amber-300"
                      } rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-amber-500 transition-all`}
                    />
                    {formErrors.date && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.date}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-900 mb-2" htmlFor="time">
                      Select Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full border ${
                        formErrors.time ? "border-red-500" : "border-amber-300"
                      } rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-amber-500 transition-all`}
                    >
                      <option value="">Choose a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {formErrors.time && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.time}
                      </p>
                    )}
                  </div>

                  {/* Additional Comments */}
                  <div className="md:col-span-2 pt-4 border-t border-amber-100">
                    <label
                      className="block text-amber-700 mb-2"
                      htmlFor="message"
                    >
                      Additional Comments (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full border border-amber-300 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-amber-500 transition-all"
                      placeholder="Any special requests or additional information we should know..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="md:col-span-2 mt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-medium transition-all transform hover:bg-amber-700 ${
                        isSubmitting ? "opacity-75" : ""
                      }`}
                    >
                      {isSubmitting ? "Processing..." : "Book Appointment"}
                    </button>
                  </div>
                </form>
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
              <div className="bg-amber-600 text-white p-6 flex items-center">
                <FaCalendarAlt className="text-2xl mr-4" />
                <h3 className="text-xl font-bold">Booking Info</h3>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <FaClock className="text-amber-600 mr-3" />
                    <h4 className="font-semibold text-lg text-amber-800">
                      Business Hours
                    </h4>
                  </div>
                  <div className="ml-8 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900">MON - SAT</span>
                      <span className="font-medium">9:00 AM - 8:30 PM</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-900">SUNDAY</span>
                      <span className="font-medium">2:30 PM - 9:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <FaCut className="text-amber-600 mr-3" />
                    <h4 className="font-semibold text-lg text-amber-800">
                      Our Services
                    </h4>
                  </div>
                  <div className="ml-8 space-y-2">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-900">{service.name}</span>
                        <span className="font-medium">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg border border-amber-200">
                  <h4 className="font-semibold mb-2 flex items-center text-amber-800">
                    <Scissors className="w-4 h-4 mr-2 text-amber-600" />
                    Booking Policy
                  </h4>
                  <ul className="text-sm text-gray-900 space-y-2">
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
