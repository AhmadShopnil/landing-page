"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { CircleCheck, LockKeyhole, Play } from "lucide-react";

export default function Order() {
  const [selectedVariant, setSelectedVariant] = useState("black");
  const [selectedVariantData, setSelectedVariantData] = useState();
  const [quantities, setQuantities] = useState({
    black: 1,
    chocolate: 1,
  });
  const [shippingMethod, setShippingMethod] = useState("inside");

  const handleQuantityChange = (variant, change) => {
    setQuantities((prev) => ({
      ...prev,
      [variant]: Math.max(1, prev[variant] + change),
    }));
  };

  const price = 1595;
  const shippingRates = {
    inside: 150,
    outside: 80,
  };

  const total = useMemo(() => {
    const subtotal = price * (quantities.black + quantities.chocolate);
    return subtotal + shippingRates[shippingMethod];
  }, [quantities, shippingMethod]);

  return (
    <div className="  mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2
          className="rounded-2xl border-4 border-black bg-[#007F0A] py-3 text-center
        text-[32px] font-bold text-white leading-8"
          style={{ boxShadow: "0px 0px 6px 2px rgba(0, 0, 0, 0.3)" }}
        >
          পছন্দের কালার অর্ডার করুন
        </h2>
      </div>

      {/* Customer Note */}
      <div className="mb-10 space-y-8 text-sm text-gray-600 font-[500]">
        <div className="flex items-center gap-2 ">
          <CircleCheck size={16} color="#ee4f4f" strokeWidth={1.75} />
          <p>
            Customer must have Credit/Debit card to be covered by our order
            cancellation policy
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <CircleCheck size={16} color="#ee4f4f" strokeWidth={1.75} />
          <p>Free shipping on orders over 3000৳</p>
        </div>
      </div>

      {/* Product Selection */}
      <div className="mb-8 text-[#555555]">
        <h3 className="mb-5 text-lg font-bold leading-6 text-[#555555]">
          কালার সিলেক্ট করুনঃ
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Black Variant */}
          <div
            className={`rounded-lg border p-4 ${
              selectedVariant === "black"
                ? "border-gray-400"
                : "border-gray-300"
            }`}
          >
            <div className="flex items-center gap-4">
              <input
                type="radio"
                name="variant"
                value="black"
                checked={selectedVariant === "black"}
                onChange={(e) => setSelectedVariant(e.target.value)}
                className="h-4 w-4 border-gray-300 accent-[#F16334]"
              />

              <Image
                src="/images/black.webp"
                alt="Black Wallet"
                width={80}
                height={80}
                className="rounded-lg border border-gray-200"
              />
              <div className="flex-1">
                <h4 className="text-[16px] font-semibold leading-7">
                  ANON Leather Long Wallet LW104 (Black)
                </h4>
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex items-center">
                    <button
                      onClick={() => handleQuantityChange("black", -1)}
                      className="flex h-8 w-8 items-center justify-center rounded-l border border-r-0 border-gray-300 bg-gray-50 text-gray-600 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantities.black}
                      onChange={(e) =>
                        setQuantities((prev) => ({
                          ...prev,
                          black: Math.max(1, parseInt(e.target.value) || 1),
                        }))
                      }
                      className="h-8 w-16 border border-gray-300 text-center text-sm [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />
                    <button
                      onClick={() => handleQuantityChange("black", 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-r border border-l-0 border-gray-300
                       bg-gray-50 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm font-semibold">
                    {price.toFixed(2)}৳
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Chocolate Variant */}
          <div
            className={`rounded-lg border p-4 ${
              selectedVariant === "chocolate"
                ? "border-gray-400"
                : "border-gray-300"
            }`}
          >
            <div className="flex items-center gap-4">
              <input
                type="radio"
                name="variant"
                value="chocolate"
                checked={selectedVariant === "chocolate"}
                onChange={(e) => setSelectedVariant(e.target.value)}
                className="h-4 w-4 border-gray-300 accent-[#F16334]"
              />
              <Image
                src="/images/chocolate.webp"
                alt="Chocolate Wallet"
                width={80}
                height={80}
                className="rounded-lg border border-gray-200"
              />
              <div className="flex-1">
                <h4 className="text-[16px] font-semibold leading-7">
                  ANON Leather Long Wallet LW104 (Chocolate)
                </h4>
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex items-center">
                    <button
                      onClick={() => handleQuantityChange("chocolate", -1)}
                      className="flex h-8 w-8 items-center justify-center rounded-l border border-r-0
                       border-gray-300 bg-gray-50 text-gray-600 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantities.chocolate}
                      onChange={(e) =>
                        setQuantities((prev) => ({
                          ...prev,
                          chocolate: Math.max(1, parseInt(e.target.value) || 1),
                        }))
                      }
                      className="h-8 w-16 border border-gray-300 text-center text-sm 
                      [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />
                    <button
                      onClick={() => handleQuantityChange("chocolate", 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-r border border-l-0
                       border-gray-300 bg-gray-50 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm font-semibold">
                    {price.toFixed(2)}৳
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 text-[#333333]">
        {/* Billing Details */}
        <div>
          <h3 className="mb-5 font-semibold text-xl  text-[#333333]">
            BILLING DETAILS
          </h3>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-gray-600">
                আপনার নাম
                <span className="text-[#E2260A] ml-1 text-lg ">*</span>
              </label>
              <input
                type="text"
                className="w-full rounded border border-gray-300 p-2 text-sm"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-gray-600  ">
                মোবাইল নাম্বার
                <span className="text-[#E2260A] ml-1 text-lg ">*</span>
              </label>
              <input
                type="tel"
                className="w-full rounded border border-gray-300 p-2 text-sm"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-gray-600">
                ঠিকানা লিখুন
                <span className="text-[#E2260A] ml-1 text-lg ">*</span>
              </label>
              <input
                type="text"
                className="w-full rounded border border-gray-300 p-2 text-sm"
                required
              ></input>
            </div>
            <div>
              <p className="text-[13px] ">Country / Region</p>
              <p className="text-[15px] font-bold">Bangladesh</p>
            </div>

            {/* inside/ outside dhaka */}
            <div className="mt-4">
              <h4 className="mb-2 font-semibold text-xl  text-[#333333]">
                SHIPPING
              </h4>
              <div className="space-y-2 border divide-y">
                <label className="flex items-center gap-2 px-4 pt-3 text-[15px]">
                  <input
                    type="radio"
                    name="shipping"
                    value="inside"
                    checked={shippingMethod === "inside"}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="h-4 w-4 border-gray-300 accent-[#F16334]"
                  />
                  <span>Inside Dhaka</span>
                  <span className="ml-auto font-bold">100.00৳</span>
                </label>
                <label className="flex items-center gap-2 px-4 pt-3 pb-3 text-[15px]">
                  <input
                    type="radio"
                    name="shipping"
                    value="outside"
                    checked={shippingMethod === "outside"}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="h-4 w-4 border-gray-300 accent-[#F16334]"
                  />
                  <span>Outside Dhaka</span>
                  <span className="ml-auto font-bold">60.00৳</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <h3 className="mb-4 font-medium">YOUR ORDER</h3>
          <div className="rounded border border-gray-200 p-4">
            <div className="mb-4 flex justify-between border-b pb-4">
              <span className="text-sm font-medium">Product</span>
              <span className="text-sm font-medium">Subtotal</span>
            </div>
            <div className=" divide-y">
              <div className="flex justify-between text-sm gap-3 py-2">
                <div className="flex gap-4">
                  <Image
                    src={`/images/${selectedVariant}.webp`}
                    alt="Black Wallet"
                    width={50}
                    height={50}
                    className="rounded-lg border border-gray-200"
                  />
                  <div>
                    <p>ANON Leather Long Wallet LW104 </p>
                    <p className="capitalize ">({selectedVariant})</p>
                  </div>
                  <div className="flex flex-col">
                    <span>×</span>
                    <span>{quantities.black}</span>
                  </div>
                </div>

                {/* cost */}
                <span>{(price * quantities.black).toFixed(2)}৳</span>
              </div>

              <div className="flex justify-between text-sm font-medium py-2">
                <span>Subtotal</span>
                <span>
                  {(price * (quantities.black + quantities.chocolate)).toFixed(
                    2
                  )}
                  ৳
                </span>
              </div>
              <div className="flex justify-between text-sm py-2">
                <span>Shipping</span>
                <span>{shippingRates[shippingMethod].toFixed(2)}৳</span>
              </div>
              <div className="flex justify-between text-sm font-bold py-2">
                <span>Total</span>
                <span>{total.toFixed(2)}৳</span>
              </div>
              <h4 className=" pt-4 pb-2 text-[#F17248] flex items-center gap-2">
                <Play size={10} color="#F17146" />
                Have a coupon?
              </h4>
            </div>
          </div>

          {/* Shipping Method */}

          <div className="mt-6">
            <p className="mb-4 text-sm text-gray-600">
              Pay with cash upon delivery.
            </p>
            <button
              className="w-full rounded bg-[#F17248] hover:bg-[#C65F3D] transition-colors duration-100 py-4 text-center text-white flex justify-center gap-2
             "
            >
              <LockKeyhole size={20} color="#ffff" strokeWidth={1.75} />
              অর্ডার করুন {total.toFixed(2)}৳
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
