export const doReadyForBook = (data = []) => {
    const mainArray = [];
    data.forEach((data) => {
        data.testList.map((test) => {
            const structer = {};
            structer["categoryName"] = data.categoryName;
            structer["name"] = test.name;
            structer["image"] = test.image;
            structer["description"] = test.description;
            structer["price"] = test.price;
            structer["isPopular"] = test.isPopular;
            mainArray.push(structer);
        });
    });
    return mainArray;

}

export const getBrowserName = () => {
  const userAgent = navigator.userAgent;

  if (/chrome|crios|crmo/i.test(userAgent) && !/edge|edg|opr|opera/i.test(userAgent)) {
    return "Chrome";
  } else if (/firefox|fxios/i.test(userAgent)) {
    return "Firefox";
  } else if (/safari/i.test(userAgent) && !/chrome|crios|crmo/i.test(userAgent)) {
    return "Safari";
  } else if (/opr|opera/i.test(userAgent)) {
    return "Opera";
  } else if (/edg/i.test(userAgent)) {
    return "Edge";
  } else {
    return "Unknown";
  }
}

