const validation = (data, cooprationType) => {
  const error = {};

  //companyFa
  if (!data.company.trim()) {
    error.company = "عنوان شرکت باید وارد شود.";
  } else {
    delete error.company;
  }
  //companyEn
  if (!data.enCompany.trim()) {
    error.enCompany = "عنوان شرکت(به انگلیسی) باید وارد شود.";
  } else {
    delete error.enCompany;
  }

  //jobTitle
  if (!data.jobTitle.trim()) {
    error.jobTitle = "عنوان شغل باید وارد شود.";
  } else {
    delete error.jobTitle;
  }

  //description
  if (!data.description.trim()) {
    error.description = "توضیحاتی برای موقعیت شغلی وارد کنید.";
  } else {
    delete error.description;
  }

  //category
  if (!data.category.trim()) {
    error.category = "حوزه کاری را مشخص کنید.";
  } else {
    delete error.category;
  }

  //   companyDescription
  if (!data.companyDescription.trim()) {
    error.companyDescription = "توضیحاتی در رابطه با شرکت وارد کنید.";
  } else {
    delete error.companyDescription;
  }

  //experience
  if (!data.experience.trim()) {
    error.experience = "حداقل سابقه کار را مشخص کنید.";
  } else {
    delete error.experience;
  }

//   cooprationType
  if (!cooprationType.length) {
    error.cooprationType = "نوع همکاری را مشخص کنید.";
  } else {
    delete error.cooprationType;
  }

  return error;
};

export default validation;
