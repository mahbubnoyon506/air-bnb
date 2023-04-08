"use client";

import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";
import { useMemo, useState } from "react";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";
import { idText } from "typescript";
import CategoryInput from "../inputs/CategoryInput";
import { FieldValue, FieldValues, useForm } from "react-hook-form";

enum STEPT {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const rentModal = useRentModal();
  const [step, setStep] = useState(STEPT.CATEGORY);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
        errors,
    },
    reset
  } = useForm<FieldValues>({
defaultValues:{
    category:'',
    location: null,
    guestCount: 1,
    roomCount: 1,
    ImageSrc: '',
    price: 1,
    title: '',
    description: ''
}
  })

  const category = watch('category');
  const setCustomValue =(id:string, value: any) => {
    setValue(id, value, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
    })
  }

  const onBack = () => {
    setStep((value) => value - 1);
  };
  const onNext = () => {
    setStep((value) => value + 1);
  };
  const actionLabel = useMemo(() => {
    if (step === STEPT.PRICE) {
      return "Create";
    }
    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPT.CATEGORY) {
      return undefined;
    }
    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describe your place?"
        subtitle="Pick a category"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
        {categories.map((item) => (
          <div className="col-span-1" key={item.label}>
            <CategoryInput 
            onClick={(category) => setCustomValue('category', category)} 
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPT.CATEGORY ? undefined : onBack}
      title="Airbnb your home"
      body={bodyContent}
    />
  );
};

export default RentModal;
