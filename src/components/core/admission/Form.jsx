import React from "react";

const Form = () => {
  return (
    <div>
      <p className=" text-2xl tracking-wide md:text-3xl text-black font-bold text-center mt-16 ">
        FORM
      </p>

      {/* Child Details */}
      <div className=" px-4 lg:w-[80%] mx-auto mt-5">
        <p className=" text-black text-xl font-semibold">Child Details</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          {/* <input defaultValue="test" {...register("example")} /> */}

          {/* include validation with required or other standard HTML validation rules */}
          {/* <input {...register("exampleRequired", { required: true })} /> */}
          {/* errors will return when field validation fails  */}
          {/* {errors.exampleRequired && <span>This field is required</span>} */}

          {/* child name and nickname */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Full Name<span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("childName", {
                  required: {
                    value: true,
                    message: "Child name is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Name should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 60,
                    message: "Child name shouldn't exceed 60 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.childName && (
                <span className=" text-red-500 text-xs">
                  {errors.childName.message}
                </span>
              )}
            </div>{" "}
            <div className=" mt-3 w-full">
              <p>Nickname (if any)</p>
              <input
                {...register("nickName", {
                  maxLength: {
                    value: 60,
                    message: "Nickname shouldn't exceed 60 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.nickName && (
                <span className=" text-red-500 text-xs">
                  {errors.nickName.message}
                </span>
              )}
            </div>
          </div>

          {/* dob and age */}
          {/* validation for the age to be added  */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Date of Birth <span className=" text-red-500"> *</span>
              </p>
              <input
                type="date"
                max={`${date.getFullYear()}-${(date.getMonth() + 1)
                  .toString()
                  .padStart(2, "0")}-${date.getDate()}`}
                {...register("dob", {
                  required: {
                    value: true,
                    message: " Date of birth is  required",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.dob && (
                <span className=" text-red-500 text-xs">
                  {errors.dob.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>
                Age (at time of admission){" "}
                <span className=" text-red-500"> *</span>
              </p>
              <input
                maxLength={10}
                {...register("age", {
                  required: {
                    value: true,
                    message: "Child name is required",
                  },
                  pattern: {
                    value: /^[0-9]{2}$/,
                    message: "invalid age",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.age && (
                <span className=" text-red-500 text-xs">
                  {errors.age.message}
                </span>
              )}
            </div>
          </div>

          {/* Gender and nationality */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Gender <span className=" text-red-500"> *</span>
              </p>
              <div className=" flex gap-3">
                <label htmlFor="male">
                  <input
                    {...register("gender", {
                      required: {
                        value: true,
                        message: "Please select the gender",
                      },
                    })}
                    type="radio"
                    value="male"
                    id="male"
                  />{" "}
                  Male
                </label>
                <label htmlFor="female">
                  <input
                    {...register("gender", {
                      required: {
                        value: true,
                        message: "Please select the gender",
                      },
                    })}
                    type="radio"
                    value="female"
                    id="female"
                  />{" "}
                  Female
                </label>
                <label htmlFor="other">
                  <input
                    {...register("gender", {
                      required: {
                        value: true,
                        message: "Please select the gender",
                      },
                    })}
                    type="radio"
                    value="other"
                    id="other"
                  />{" "}
                  Other
                </label>
              </div>

              {errors.gender && (
                <span className=" text-red-500 text-xs">
                  {errors.gender.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>
                Nationality<span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("nationality", {
                  required: {
                    value: true,
                    message: "Nationality is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Nationality should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 60,
                    message: "Nationality shouldn't exceed 60 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.nationality && (
                <span className=" text-red-500 text-xs">
                  {errors.nationality.message}
                </span>
              )}
            </div>
          </div>

          {/* Mother tongue and Home language */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Mother Tongue<span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("motherTongue", {
                  required: {
                    value: true,
                    message: "Mother tongue is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Mother tongue should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 60,
                    message: "Mother tongue shouldn't exceed 60 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.motherTongue && (
                <span className=" text-red-500 text-xs">
                  {errors.motherTongue.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>
                Home Language(s) Spoken
                <span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("homeLanguage", {
                  required: {
                    value: true,
                    message: "Home spoken languages is required",
                  },
                  minLength: {
                    value: 3,
                    message:
                      "Home spoken languages should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 60,
                    message:
                      "Home spoken languages shouldn't exceed 60 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.homeLanguage && (
                <span className=" text-red-500 text-xs">
                  {errors.homeLanguage.message}
                </span>
              )}
            </div>
          </div>

          {/* Current and permanent address */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Current Address<span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("currentAddress", {
                  required: {
                    value: true,
                    message: "Current Address is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Current Address should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "Current Address shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.currentAddress && (
                <span className=" text-red-500 text-xs">
                  {errors.currentAddress.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>
                Permanent Address<span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("permanentAddress", {
                  required: {
                    value: true,
                    message: "Permanent Adsress is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Permanent Adsress should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message:
                      "Permanent Adsress shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.permanentAddress && (
                <span className=" text-red-500 text-xs">
                  {errors.permanentAddress.message}
                </span>
              )}
            </div>
          </div>

          {/* Course Applied */}
          <div className=" mt-3 w-full">
            <p>
              Class Applying For <span className=" text-red-500"> *</span>
            </p>
            <div className=" flex gap-3">
              <label htmlFor="playground">
                <input
                  {...register("course", {
                    required: {
                      value: true,
                      message: "Please select the class",
                    },
                  })}
                  type="radio"
                  value="playground"
                  id="playground"
                />{" "}
                Playground
              </label>
              <label htmlFor="nursery">
                <input
                  {...register("course", {
                    required: {
                      value: true,
                      message: "Please select the course",
                    },
                  })}
                  type="radio"
                  value="nursery"
                  id="nursery"
                />{" "}
                Nursery
              </label>
              <label htmlFor="lkg">
                <input
                  {...register("course", {
                    required: {
                      value: true,
                      message: "Please select the course",
                    },
                  })}
                  type="radio"
                  value="lkg"
                  id="lkg"
                />{" "}
                LKG
              </label>
              <label htmlFor="ukg">
                <input
                  {...register("course", {
                    required: {
                      value: true,
                      message: "Please select the course",
                    },
                  })}
                  type="radio"
                  value="ukg"
                  id="ukg"
                />{" "}
                UKG
              </label>
              <label htmlFor="daycare">
                <input
                  {...register("course", {
                    required: {
                      value: true,
                      message: "Please select the course",
                    },
                  })}
                  type="radio"
                  value="daycare"
                  id="daycare"
                />{" "}
                Daycare
              </label>
            </div>

            {errors.course && (
              <span className=" text-red-500 text-xs">
                {errors.course.message}
              </span>
            )}
          </div>

          <p className=" text-black text-xl font-semibold mt-12 mb-1">
            Child's Development, Preferences & Comfort Needs
          </p>

          <p className=" text-black text-base font-semibold mt-6">
            Developmental Milestones
          </p>

          {/* Potty and self feeding */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Is your child potty trained?{" "}
                <span className=" text-red-500"> *</span>
              </p>
              <div className=" flex gap-3">
                <label htmlFor="yes">
                  <input
                    {...register("isPottyTrained", {
                      required: {
                        value: true,
                        message: "Please select the on option",
                      },
                    })}
                    type="radio"
                    value="yes"
                    id="yes"
                  />{" "}
                  Yes
                </label>
                <label htmlFor="no">
                  <input
                    {...register("isPottyTrained", {
                      required: {
                        value: true,
                        message: "Please select the on option",
                      },
                    })}
                    type="radio"
                    value="no"
                    id="no"
                  />{" "}
                  No
                </label>
                <label htmlFor="partially">
                  <input
                    {...register("isPottyTrained", {
                      required: {
                        value: true,
                        message: "Please select the on option",
                      },
                    })}
                    type="radio"
                    value="partially"
                    id="partially"
                  />{" "}
                  Partially
                </label>
              </div>

              {errors.isPottyTrained && (
                <span className=" text-red-500 text-xs">
                  {errors.isPottyTrained.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>
                Does your child self-feed?{" "}
                <span className=" text-red-500"> *</span>
              </p>
              <div className=" flex gap-3">
                <label htmlFor="yes">
                  <input
                    {...register("isSelfFeeding", {
                      required: {
                        value: true,
                        message: "Please select the on option",
                      },
                    })}
                    type="radio"
                    value="yes"
                    id="yes"
                  />{" "}
                  Yes
                </label>
                <label htmlFor="no">
                  <input
                    {...register("isPottyTrained", {
                      required: {
                        value: true,
                        message: "Please select the on option",
                      },
                    })}
                    type="radio"
                    value="no"
                    id="no"
                  />{" "}
                  No
                </label>
                <label htmlFor="withSomeAssistance">
                  <input
                    {...register("isPottyTrained", {
                      required: {
                        value: true,
                        message: "Please select the on option",
                      },
                    })}
                    type="radio"
                    value="withSomeAssistance"
                    id="withSomeAssistance"
                  />{" "}
                  With Some Assistance
                </label>
              </div>

              {errors.isSelfFeeding && (
                <span className=" text-red-500 text-xs">
                  {errors.isSelfFeeding.message}
                </span>
              )}
            </div>
          </div>

          {/* sleep routine and nap during time ?  */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Sleep/Nap Routine <span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("sleepRoutine", {
                  required: {
                    value: true,
                    message: "Above field is required is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "Shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.sleepRoutine && (
                <span className=" text-red-500 text-xs">
                  {errors.sleepRoutine.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>
                Does your child nap during the day?{" "}
                <span className=" text-red-500"> *</span>
              </p>
              <div className=" flex gap-3">
                <label htmlFor="yes">
                  <input
                    {...register("napDuringDay", {
                      required: {
                        value: true,
                        message: "Please select the class",
                      },
                    })}
                    type="radio"
                    value="yes"
                    id="yes"
                  />{" "}
                  Yes
                </label>
                <label htmlFor="no">
                  <input
                    {...register("napDuringDay", {
                      required: {
                        value: true,
                        message: "Please select the class",
                      },
                    })}
                    type="radio"
                    value="no"
                    id="no"
                  />{" "}
                  No
                </label>
              </div>

              {errors.napDuringDay && (
                <span className=" text-red-500 text-xs">
                  {errors.napDuringDay.message}
                </span>
              )}
            </div>
          </div>

          {/* Nap timing and duration */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>Nap Timing</p>
              <input
                {...register("napTiming", {
                  required: {
                    value: true,
                    message: "Nap timing is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Nap timing should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 100,
                    message: "Nap timing shouldn't exceed 100 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.napTiming && (
                <span className=" text-red-500 text-xs">
                  {errors.napTiming.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>Nap Duration</p>
              <input
                {...register("napDuration", {
                  required: {
                    value: true,
                    message: "Nap duration is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Nap duration should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "Nap duration shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.napDuration && (
                <span className=" text-red-500 text-xs">
                  {errors.napDuration.message}
                </span>
              )}
            </div>
          </div>

          {/* Pacifier/bottle and details */}
          <div>
            <div className=" mt-3 w-full">
              <p>
                Does your child use a pacifier or bottle?{" "}
                <span className=" text-red-500"> *</span>
              </p>
              <div className=" flex gap-3">
                <label htmlFor="yes">
                  <input
                    {...register("useAnyPacifier", {
                      required: {
                        value: true,
                        message: "Please select the class",
                      },
                    })}
                    type="radio"
                    value="yes"
                    id="playgyesround"
                  />{" "}
                  Yes
                </label>
                <label htmlFor="no">
                  <input
                    {...register("useAnyPacifier", {
                      required: {
                        value: true,
                        message: "Please select the class",
                      },
                    })}
                    type="radio"
                    value="no"
                    id="no"
                  />{" "}
                  No
                </label>
              </div>

              {errors.useAnyPacifier && (
                <span className=" text-red-500 text-xs">
                  {errors.useAnyPacifier.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>Pacifier Details</p>
              <input
                {...register("pacifierDetails", {
                  required: {
                    value: true,
                    message: "Detail is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Detail be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "Details shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.pacifierDetails && (
                <span className=" text-red-500 text-xs">
                  {errors.pacifierDetails.message}
                </span>
              )}
            </div>
          </div>

          <p className=" text-black text-base font-semibold mt-6">
            Food & Mealtime
          </p>

          {/* Food preference and comfort foood */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Food Preferences / Allergies / Dietary Restrictions{" "}
                <span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("foodPreference", {
                  required: {
                    value: true,
                    message: "Food Preference is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Food Preference should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "Food Preference shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.foodPreference && (
                <span className=" text-red-500 text-xs">
                  {errors.foodPreference.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>Favourite snacks or comfort foods</p>
              <input
                {...register("favouriteSnacks", {
                  minLength: {
                    value: 3,
                    message: "Favourite Snack should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "Favourite Snack shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.favouriteSnacks && (
                <span className=" text-red-500 text-xs">
                  {errors.favouriteSnacks.message}
                </span>
              )}
            </div>
          </div>

          {/* Feeding routine */}
          <div className=" mt-3 w-full">
            <p>Feeding routine (if any)</p>
            <input
              {...register("feedingRoutine", {
                minLength: {
                  value: 3,
                  message: "Feeding routine should be minimum of 3 letters",
                },
                maxLength: {
                  value: 300,
                  message: "Feeding routine shouldn't exceed 300 characters",
                },
              })}
              className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
            />
            {errors.feedingRoutine && (
              <span className=" text-red-500 text-xs">
                {errors.feedingRoutine.message}
              </span>
            )}
          </div>

          <p className=" text-black text-base font-semibold mt-6">
            Emotional Needs & Soothing
          </p>

          {/* Keeping clam and specific word */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                What helps calm your child when upset? (e.g. hugs, songs,
                distractions)
              </p>
              <input
                {...register("thingsToClamWhenUpset", {
                  minLength: {
                    value: 3,
                    message: "Food Preference should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "Food Preference shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.thingsToClamWhenUpset && (
                <span className=" text-red-500 text-xs">
                  {errors.thingsToClamWhenUpset.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>
                Specific words/sounds your child uses (e.g. “hoo hoo” for hurt,
                “nana” for banana)
              </p>
              <input
                {...register("specificWordsUsed", {
                  minLength: {
                    value: 3,
                    message: "Specific word should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "Specific word shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.specificWordsUsed && (
                <span className=" text-red-500 text-xs">
                  {errors.specificWordsUsed.message}
                </span>
              )}
            </div>
          </div>

          {/* seperatoin axiety and ease transition */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Does your child experience separation anxiety?{" "}
                <span className=" text-red-500"> *</span>
              </p>
              <div className=" flex gap-3">
                <label htmlFor="yes">
                  <input
                    {...register("seperationAnxiety", {
                      required: {
                        value: true,
                        message: "Please select the option",
                      },
                    })}
                    type="radio"
                    value="yes"
                    id="yes"
                  />{" "}
                  Yes
                </label>
                <label htmlFor="no">
                  <input
                    {...register("seperationAnxiety", {
                      required: {
                        value: true,
                        message: "Please select the option",
                      },
                    })}
                    type="radio"
                    value="no"
                    id="no"
                  />{" "}
                  No
                </label>
                <label htmlFor="sometimes">
                  <input
                    {...register("seperationAnxiety", {
                      required: {
                        value: true,
                        message: "Please select the option",
                      },
                    })}
                    type="radio"
                    value="sometimes"
                    id="sometimes"
                  />{" "}
                  Sometimes
                </label>
              </div>

              {errors.seperationAnxiety && (
                <span className=" text-red-500 text-xs">
                  {errors.seperationAnxiety.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>If yes, what helps ease transitions?</p>
              <input
                {...register("easeTransitionForSeperationAnxiety", {
                  minLength: {
                    value: 3,
                    message: "This field should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "This field shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.easeTransitionForSeperationAnxiety && (
                <span className=" text-red-500 text-xs">
                  {errors.easeTransitionForSeperationAnxiety.message}
                </span>
              )}
            </div>
          </div>

          {/* disress triggers and comfort */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Common triggers for distress (e.g. loud noise, crowd, specific
                fears):
              </p>
              <input
                {...register("distressTiggers", {
                  minLength: {
                    value: 3,
                    message: "This field should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "This field shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.distressTiggers && (
                <span className=" text-red-500 text-xs">
                  {errors.distressTiggers.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>Phrases/rituals used at home to reassure or comfort:</p>
              <input
                {...register("ritualsToComfort", {
                  minLength: {
                    value: 3,
                    message: "This field should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "This field shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.ritualsToComfort && (
                <span className=" text-red-500 text-xs">
                  {errors.ritualsToComfort.message}
                </span>
              )}
            </div>
          </div>

          <p className=" text-black text-base font-semibold mt-6">
            Preferences & Personality
          </p>

          {/* favourite activity or interest */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>Favourite Activities or Interests</p>
              <input
                {...register("interest", {
                  minLength: {
                    value: 3,
                    message: "This field should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "This field shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.interest && (
                <span className=" text-red-500 text-xs">
                  {errors.interest.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>Hobbies (Art, Music, Dance, Outdoor Play, etc.):</p>
              <input
                {...register("hobbies", {
                  minLength: {
                    value: 3,
                    message: "This field should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "This field shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.hobbies && (
                <span className=" text-red-500 text-xs">
                  {errors.hobbies.message}
                </span>
              )}
            </div>
          </div>

          {/* free time and dislikes */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>How does your child prefer to spend free time?</p>
              <input
                {...register("howFreeTimeSpent", {
                  minLength: {
                    value: 3,
                    message: "This field should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "This field shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.howFreeTimeSpent && (
                <span className=" text-red-500 text-xs">
                  {errors.howFreeTimeSpent.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>Things your child dislikes or fears:</p>
              <input
                {...register("dislikes", {
                  minLength: {
                    value: 3,
                    message: "This field should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "This field shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.dislikes && (
                <span className=" text-red-500 text-xs">
                  {errors.dislikes.message}
                </span>
              )}
            </div>
          </div>

          {/* conform object and social style */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>Comfort object (e.g. soft toy, blanket)</p>
              <input
                {...register("comfortObject", {
                  minLength: {
                    value: 3,
                    message: "This field should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "This field shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.comfortObject && (
                <span className=" text-red-500 text-xs">
                  {errors.comfortObject.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>
                Social Style
                <span className=" text-red-500"> *</span>
              </p>
              <div className=" flex gap-3">
                <label htmlFor="Outgoing">
                  <input
                    {...register("socialStyle", {
                      required: {
                        value: true,
                        message: "Please select the option",
                      },
                    })}
                    type="radio"
                    value="Outgoing"
                    id="Outgoing"
                  />{" "}
                  Outgoing
                </label>
                <label htmlFor="Observant">
                  <input
                    {...register("socialStyle", {
                      required: {
                        value: true,
                        message: "Please select the option",
                      },
                    })}
                    type="radio"
                    value="Observant"
                    id="Observant"
                  />{" "}
                  Observant
                </label>
                <label htmlFor="Reserved">
                  <input
                    {...register("socialStyle", {
                      required: {
                        value: true,
                        message: "Please select the option",
                      },
                    })}
                    type="radio"
                    value="Reserved"
                    id="Reserved"
                  />{" "}
                  Observant
                </label>
                <label htmlFor="DependsOnEnvironment">
                  <input
                    {...register("socialStyle", {
                      required: {
                        value: true,
                        message: "Please select the option",
                      },
                    })}
                    type="radio"
                    value="Depends on environment"
                    id="DependsOnEnvironment"
                  />{" "}
                  Observant
                </label>
              </div>

              {errors.socialStyle && (
                <span className=" text-red-500 text-xs">
                  {errors.socialStyle.message}
                </span>
              )}
            </div>
          </div>

          <p className=" text-black text-base font-semibold mt-6">
            Media Exposure
          </p>

          {/* screen type and type of content */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Approximate screen time per day{" "}
                <span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("screenTimePerDay", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  minLength: {
                    value: 3,
                    message: "This field should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "This field shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.screenTimePerDay && (
                <span className=" text-red-500 text-xs">
                  {errors.screenTimePerDay.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>
                Type of content (Shows/Apps/Games){" "}
                <span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("typeOfContent", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  minLength: {
                    value: 3,
                    message: "This field should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "This field shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.typeOfContent && (
                <span className=" text-red-500 text-xs">
                  {errors.typeOfContent.message}
                </span>
              )}
            </div>
          </div>

          {/* favourite characters  */}
          <div className=" mt-3 w-full">
            <p>Favourite characters/songs/shows</p>
            <input
              {...register("favouriteCharacterSongShow", {
                minLength: {
                  value: 3,
                  message: "This field should be minimum of 3 letters",
                },
                maxLength: {
                  value: 300,
                  message: "This field shouldn't exceed 300 characters",
                },
              })}
              className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
            />
            {errors.favouriteCharacterSongShow && (
              <span className=" text-red-500 text-xs">
                {errors.favouriteCharacterSongShow.message}
              </span>
            )}
          </div>

          <p className=" text-black text-base font-semibold mt-6">
            Other Notes
          </p>

          {/* other notes */}
          <div className=" mt-3 w-full">
            <p>
              Is there anything else you'd like us to know to support your
              child’s comfort and happiness at Tulip Tots?
            </p>
            <input
              {...register("otherNotes", {
                minLength: {
                  value: 3,
                  message: "This field should be minimum of 3 letters",
                },
                maxLength: {
                  value: 500,
                  message: "This field shouldn't exceed 500 characters",
                },
              })}
              className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
            />
            {errors.otherNotes && (
              <span className=" text-red-500 text-xs">
                {errors.otherNotes.message}
              </span>
            )}
          </div>

          <p className=" text-black text-xl font-semibold mt-6">
            Parent(s)/Guardian Details
          </p>

          <p className=" text-black text-base font-semibold mt-6">
            Mother's Details
          </p>

          {/* name and dob */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Full Name<span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("motherName", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  minLength: {
                    value: 3,
                    message: "This field should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "This field shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.motherName && (
                <span className=" text-red-500 text-xs">
                  {errors.motherName.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>
                Date of Birth <span className=" text-red-500"> *</span>
              </p>
              <input
                type="date"
                max={`${date.getFullYear()}-${(date.getMonth() + 1)
                  .toString()
                  .padStart(2, "0")}-${date.getDate()}`}
                {...register("motherDob", {
                  required: {
                    value: true,
                    message: " Date of birth is  required",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.motherDob && (
                <span className=" text-red-500 text-xs">
                  {errors.motherDob.message}
                </span>
              )}
            </div>
          </div>

          {/* occupation and mobile number */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Occupation<span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("motherOccupation", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  minLength: {
                    value: 3,
                    message: "This field should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "This field shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.motherOccupation && (
                <span className=" text-red-500 text-xs">
                  {errors.motherOccupation.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>
                Mobile Number<span className=" text-red-500"> *</span>
              </p>
              <input
                maxLength={10}
                {...register("motherNumber", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "invalid phone number",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.motherNumber && (
                <span className=" text-red-500 text-xs">
                  {errors.motherNumber.message}
                </span>
              )}
            </div>
          </div>

          {/* Email id and aadhar number  */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>Email ID</p>
              <input
                {...register("motherEmail", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  minLength: {
                    value: 3,
                    message: "This field should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "This field shouldn't exceed 300 characters",
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
                    message: "invalid email address",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.motherEmail && (
                <span className=" text-red-500 text-xs">
                  {errors.motherEmail.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>Aadhaar Number</p>
              <input
                maxLength={12}
                {...register("motherAadharNumber", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  minLength: {
                    value: 3,
                    message: "This field should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "This field shouldn't exceed 300 characters",
                  },
                  pattern: {
                    value: /^[0-9]{12}$/,
                    message: "invalid aadhaar number",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.motherAadharNumber && (
                <span className=" text-red-500 text-xs">
                  {errors.motherAadharNumber.message}
                </span>
              )}
            </div>
          </div>

          <p className=" text-black text-base font-semibold mt-6">
            Father's Details
          </p>

          {/* name and dob */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Full Name<span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("fatherName", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  minLength: {
                    value: 3,
                    message: "This field should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "This field shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.fatherName && (
                <span className=" text-red-500 text-xs">
                  {errors.fatherName.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>
                Date of Birth <span className=" text-red-500"> *</span>
              </p>
              <input
                type="date"
                max={`${date.getFullYear()}-${(date.getMonth() + 1)
                  .toString()
                  .padStart(2, "0")}-${date.getDate()}`}
                {...register("fatherDob", {
                  required: {
                    value: true,
                    message: " Date of birth is  required",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.fatherDob && (
                <span className=" text-red-500 text-xs">
                  {errors.fatherDob.message}
                </span>
              )}
            </div>
          </div>

          {/* occupation and mobile number */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Occupation<span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("fatherOccupation", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  minLength: {
                    value: 3,
                    message: "This field should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "This field shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.fatherOccupation && (
                <span className=" text-red-500 text-xs">
                  {errors.fatherOccupation.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>
                Mobile Number<span className=" text-red-500"> *</span>
              </p>
              <input
                maxLength={10}
                {...register("fatherNumber", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "invalid phone number",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.fatherNumber && (
                <span className=" text-red-500 text-xs">
                  {errors.fatherNumber.message}
                </span>
              )}
            </div>
          </div>

          {/* Email id and aadhar number  */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Email ID<span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("fatherEmail", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
                    message: "invalid email address",
                  },
                  maxLength: {
                    value: 300,
                    message: "This field shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.fatherEmail && (
                <span className=" text-red-500 text-xs">
                  {errors.fatherEmail.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>
                Aadhaar Number<span className=" text-red-500"> *</span>
              </p>
              <input
                maxLength={12}
                {...register("fatherAadharNumber", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[0-9]{12}$/,
                    message: "invalid aadhar number",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.fatherAadharNumber && (
                <span className=" text-red-500 text-xs">
                  {errors.fatherAadharNumber.message}
                </span>
              )}
            </div>
          </div>

          <p className=" text-black text-xl font-semibold mt-6">
            Emergency Contact Details (Other than Parents)
          </p>

          {/* emergency name and relation */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Name<span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("emergencyName", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  minLength: {
                    value: 3,
                    message: "This field should be minimum of 3 letters",
                  },
                  maxLength: {
                    value: 300,
                    message: "This field shouldn't exceed 300 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.emergencyName && (
                <span className=" text-red-500 text-xs">
                  {errors.emergencyName.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>
                Relation to child<span className=" text-red-500"> *</span>
              </p>
              <input
                {...register("emergencyRelation", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  min: {
                    value: 3,
                    message: "min 3 characters required",
                  },
                  max: {
                    value: 60,
                    message: "max 60 characters",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.emergencyRelation && (
                <span className=" text-red-500 text-xs">
                  {errors.emergencyRelation.message}
                </span>
              )}
            </div>
          </div>

          {/* emergency number and alternate number */}
          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" mt-3 w-full">
              <p>
                Mobile Number<span className=" text-red-500"> *</span>
              </p>
              <input
                maxLength={10}
                {...register("emergencyNumber", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "invalid phone number",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.emergencyNumber && (
                <span className=" text-red-500 text-xs">
                  {errors.emergencyNumber.message}
                </span>
              )}
            </div>
            <div className=" mt-3 w-full">
              <p>
                Alternate Number<span className=" text-red-500"> *</span>
              </p>
              <input
                maxLength={10}
                {...register("emergencyAlternateNumber", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "invalid phonenumber",
                  },
                })}
                className=" w-full glowing-border rounded-md focus:outline-blue-400 py-2 px-3 bg-blue-100"
              />
              {errors.emergencyAlternateNumber && (
                <span className=" text-red-500 text-xs">
                  {errors.emergencyAlternateNumber.message}
                </span>
              )}
            </div>
          </div>

          <p className=" text-black text-xl font-semibold mt-6">
            Required Documents (to be attached)
          </p>

          <div className=" flex flex-col md:flex-row  gap-5">
            <div className=" flex flex-col w-full">
              <label htmlFor="childBirthDoc">
                Child's Birth Certificate
                <span className=" text-red-500"> *</span>
              </label>
              <input
                id="childBirthDoc"
                ref={childBirthRef}
                className=" bg-blue-100 p-2 rounded-md"
                type="file"
                {...register("childBirthDoc", {
                  required: {
                    value: true,
                    message: "please provide birth certificate",
                  },
                })}
              />

              {errors.childBirthDoc && (
                <span className=" text-red-500 text-xs">
                  {errors.childBirthDoc.message}
                </span>
              )}
            </div>

            <div className=" flex flex-col w-full">
              <label htmlFor="childAadhaar">
                Child's Aadhaar Card<span className=" text-red-500"> *</span>
              </label>
              <input
                id="childAadhaar"
                ref={ChildAadhaarRef}
                className=" bg-blue-100 p-2 rounded-md"
                type="file"
                {...register("childAadhaar", {
                  required: {
                    value: true,
                    message: "please provide  Child's Aadhaar Card",
                  },
                })}
              />

              {errors.childAadhaar && (
                <span className=" text-red-500 text-xs">
                  {errors.childAadhaar.message}
                </span>
              )}
            </div>
          </div>

          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" flex flex-col mt-3 w-full">
              <label htmlFor="childPhoto">
                Passport-size photographs of child
                <span className=" text-red-500"> *</span>
              </label>
              <input
                id="childPhoto"
                ref={childPhotoRef}
                className=" bg-blue-100 p-2 rounded-md"
                type="file"
                {...register("childPhoto", {
                  required: {
                    value: true,
                    message: "please provide child's photographs",
                  },
                })}
              />

              {errors.childPhoto && (
                <span className=" text-red-500 text-xs">
                  {errors.childPhoto.message}
                </span>
              )}
            </div>

            <div className=" flex flex-col mt-3 w-full">
              <label htmlFor="parentPhoto">
                Passport-size photographs of parents/guardian
                <span className=" text-red-500"> *</span>
              </label>
              <input
                id="parentPhoto"
                ref={parentPhotoRef}
                className=" bg-blue-100 p-2 rounded-md"
                type="file"
                {...register("parentPhoto", {
                  required: {
                    value: true,
                    message: "please provide parent's photographs",
                  },
                })}
              />

              {errors.parentPhoto && (
                <span className=" text-red-500 text-xs">
                  {errors.parentPhoto.message}
                </span>
              )}
            </div>
          </div>

          <div className=" flex flex-col md:flex-row gap-5">
            <div className=" flex flex-col mt-3 w-full">
              <label htmlFor="parentAadhaar">
                Aadhaar Card of Parents/Guardian
                <span className=" text-red-500"> *</span>
              </label>
              <input
                id="parentAadhaar"
                ref={parentAadhaarRef}
                className=" bg-blue-100 p-2 rounded-md"
                type="file"
                {...register("parentAadhaar", {
                  required: {
                    value: true,
                    message: "please provide parent's photographs",
                  },
                })}
              />

              {errors.parentAadhaar && (
                <span className=" text-red-500 text-xs">
                  {errors.parentAadhaar.message}
                </span>
              )}
            </div>

            <div className=" flex flex-col mt-3 w-full">
              <label htmlFor="residenceProof">
                Proof of Residence (utility bill/rental agreement)
                <span className=" text-red-500"> *</span>
              </label>
              <input
                id="residenceProof"
                ref={residenceProofRef}
                className=" bg-blue-100 p-2 rounded-md"
                type="file"
                {...register("residenceProof", {
                  required: {
                    value: true,
                    message: "please provide parent's photographs",
                  },
                })}
              />

              {errors.residenceProof && (
                <span className=" text-red-500 text-xs">
                  {errors.residenceProof.message}
                </span>
              )}
            </div>
          </div>

          <div className=" flex flex-col mt-3 md:w-[calc(50%-10px)]">
            <label htmlFor="medicalCertificate">
              Medical Certificate (if applicable - allergies, special needs,
              etc.)<span className=" text-red-500"> *</span>
            </label>
            <input
              id="medicalCertificate"
              ref={medicalCertificateRef}
              className=" bg-blue-100 p-2 rounded-md"
              type="file"
              {...register("medicalCertificate", {
                required: {
                  value: true,
                  message: "please provide parent's photographs",
                },
              })}
            />

            {errors.medicalCertificate && (
              <span className=" text-red-500 text-xs">
                {errors.medicalCertificate.message}
              </span>
            )}
          </div>

          {(!status ||
            status === "loading" ||
            status === "error" ||
            status === "success") && (
            <button
              disabled={status === "loading"}
              //   onClick={submitHandler}
              className=" mt-5 bg-blue-400 justify-end text-white py-2 px-4 rounded-lg cursor-pointer w-fit"
            >
              <p>{status === "loading" ? "Sending..." : "Send"}</p>
            </button>
          )}

          {status === "error" && (
            <div className=" mt-10 flex flex-col items-center justify-center">
              <p className=" text-red-500 font-bold text-2xl">
                Unable to send your enquiry at this point{" "}
              </p>
              <p className=" text-gray-500 text-center font-semibold w-1/2 mt-2">
                Sorry for the inconvenience, please contact as 1234567890 for
                the enquiry
              </p>
            </div>
          )}
        </form>

        {/* <input ref={fileRef} type="file" /> */}

        {/* <ul style={{ listStyleType: 'disc' }}>
            <li>Hello</li>
          </ul> */}

        {/* <div onClick={() => setshowDocument((prev) => !prev)}>Click me</div>

        {showDocument && (
          <PDFViewer style={{ width: "100%", height: "600px" }}>
            <MyDocument />
          </PDFViewer>
        )}

        <p className=" my-6">pdf </p>

        <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
          Download here
        </PDFDownloadLink> */}
      </div>
    </div>
  );
};

export default Form;
