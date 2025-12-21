import React, { useState } from "react";

export const ContactForm = () => {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
    <form 
      action="https://formspree.io/f/xbdrkkwe"
      method="POST"
      className="text-sm box-border caret-transparent leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
          {/* Name - Full width on mobile, half on desktop */}
          <div className="md:col-span-2">
            <label className="text-neutral-900 text-base font-semibold block mb-2">
              Name <span className="text-cyan-600">*</span>
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Your full name"
              className="w-full px-4 py-3.5 bg-white/90 border-2 border-white/30 rounded-lg text-neutral-900 text-base placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-200 shadow-sm"
            />
          </div>
          
          {/* Email */}
          <div>
            <label className="text-neutral-900 text-base font-semibold block mb-2">
              Email <span className="text-cyan-600">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="your.email@example.com"
              className="w-full px-4 py-3.5 bg-white/90 border-2 border-white/30 rounded-lg text-neutral-900 text-base placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-200 shadow-sm"
            />
          </div>
          
          {/* Phone */}
          <div>
            <label className="text-neutral-900 text-base font-semibold block mb-2">
              Phone
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="07368 665616"
              className="w-full px-4 py-3.5 bg-white/90 border-2 border-white/30 rounded-lg text-neutral-900 text-base placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-200 shadow-sm"
            />
          </div>
          
          {/* Address - Full width */}
          <div className="md:col-span-2">
            <label className="text-neutral-900 text-base font-semibold block mb-2">
              Address
            </label>
            <input
              name="address"
              type="text"
              placeholder="Property address"
              className="w-full px-4 py-3.5 bg-white/90 border-2 border-white/30 rounded-lg text-neutral-900 text-base placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-200 shadow-sm"
            />
          </div>
          
          {/* Description - Full width */}
          <div className="md:col-span-2">
            <label className="text-neutral-900 text-base font-semibold block mb-2">
              Brief Description of the Job / Property
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about the work you need..."
              className="w-full px-4 py-3.5 bg-white/90 border-2 border-white/30 rounded-lg text-neutral-900 text-base placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-200 shadow-sm resize-y min-h-[120px]"
            ></textarea>
          </div>
          
          {/* File Upload - Full width */}
          <div className="md:col-span-2">
            <label className="text-neutral-900 text-base font-semibold block mb-2">
              Upload Photos <span className="text-sm font-normal">(For faster quotes)</span>
            </label>
            <div className="relative">
              <input
                type="hidden"
                name="MAX_FILE_SIZE"
                value="536870912"
                className="hidden"
              />
              <div className="flex items-center gap-4">
                <label className="flex-1 cursor-pointer">
                  <input
                    name="file"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="file-upload"
                    onChange={handleFileChange}
                  />
                  <div className="px-4 py-3.5 bg-neutral-50 border-2 border-dashed border-neutral-300 rounded-lg text-neutral-700 text-base hover:bg-neutral-100 hover:border-cyan-400 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span>{fileName || "Choose files or drag and drop"}</span>
                  </div>
                </label>
              </div>
              <p className="text-neutral-600 text-sm mt-2">
                {fileName && <span className="text-cyan-600 font-medium">{fileName}</span>}
                {!fileName && "Max. file size: 512 MB"}
              </p>
            </div>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="mt-8 flex justify-center md:justify-start">
          <input
            type="submit"
            value="Send Message"
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-base px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 uppercase tracking-wider cursor-pointer min-w-[200px] transform hover:scale-105 active:scale-100"
          />
        </div>
        
    </form>
  );
};
