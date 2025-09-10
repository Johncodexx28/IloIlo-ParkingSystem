import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Upload, FileText, X, Building2, Phone, MapPin } from "lucide-react";

export default function PartnershipRequestPage() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newFiles = files.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      file,
    }));

    setUploadedFiles((prev) => [...prev, ...newFiles]);
    toast.success(`${files.length} file(s) uploaded successfully`);
  };

  const removeFile = (fileId) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId));
    toast.success("File removed");
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const onSubmit = (data) => {
    const formData = {
      ...data,
      documents: uploadedFiles,
    };

    console.log("Partnership Request Submitted:", formData);
    toast.success("Partnership request submitted successfully!");

    reset();
    setUploadedFiles([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-8">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold">
            <Building2 className="h-7 w-7 text-red-600" />
            Partnership Request Application
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Submit your partnership request to join our parking system network.
            Please provide all required information and supporting documents.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-sm">
          {/* Company Info */}
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="flex items-center gap-2 font-medium text-gray-800">
              <Building2 className="h-5 w-5 text-gray-700" />
              Company Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Company Name *</label>
                <input
                  className="w-full border rounded-md px-3 py-2"
                  {...register("companyName", {
                    required: "Company name is required",
                  })}
                />
                {errors.companyName && (
                  <p className="text-red-500 text-xs">
                    {errors.companyName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-1 font-medium">
                  Registration Number *
                </label>
                <input
                  className="w-full border rounded-md px-3 py-2"
                  {...register("registrationNumber", {
                    required: "Registration number is required",
                  })}
                />
                {errors.registrationNumber && (
                  <p className="text-red-500 text-xs">
                    {errors.registrationNumber.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="flex items-center gap-2 font-medium text-gray-800">
              <Phone className="h-5 w-5 text-gray-700" />
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">
                  Contact Person *
                </label>
                <input
                  className="w-full border rounded-md px-3 py-2"
                  {...register("contactPerson", {
                    required: "Contact person is required",
                  })}
                />
                {errors.contactPerson && (
                  <p className="text-red-500 text-xs">
                    {errors.contactPerson.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-1 font-medium">Email *</label>
                <input
                  type="email"
                  className="w-full border rounded-md px-3 py-2"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Business Description */}
          <div className="border rounded-lg p-6">
            <h3 className="flex items-center gap-2 font-medium text-gray-800">
              <MapPin className="h-5 w-5 text-gray-700" />
              Business Details
            </h3>
            <label className="block mb-1 mt-2 font-medium">
              Business Description *
            </label>
            <textarea
              rows={3}
              className="w-full border rounded-md px-3 py-2"
              {...register("businessDescription", {
                required: "Description is required",
              })}
            />
            {errors.businessDescription && (
              <p className="text-red-500 text-xs">
                {errors.businessDescription.message}
              </p>
            )}
          </div>

          {/* File Upload */}
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="flex items-center gap-2 font-medium text-gray-800">
              <FileText className="h-5 w-5 text-gray-700" />
              Supporting Documents
            </h3>
            <div className="border-2 border-dashed rounded-lg p-6 text-center relative">
              <Upload className="h-10 w-10 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">
                Drag & drop files or click to browse
              </p>
              <input
                type="file"
                multiple
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleFileUpload}
              />
            </div>

            {uploadedFiles.length > 0 && (
              <div className="space-y-2">
                <p className="font-medium text-sm">
                  Uploaded ({uploadedFiles.length})
                </p>
                <div className="space-y-1">
                  {uploadedFiles.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between border rounded-md px-3 py-2 text-sm"
                    >
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-gray-500 text-xs">
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(file.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => {
                reset();
                setUploadedFiles([]);
              }}
              className="px-4 py-2 border rounded-md hover:bg-gray-50"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
