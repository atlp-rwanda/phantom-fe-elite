import React, { useState, useRef, useEffect } from "react";

const SearchbarDropdown = (props) => {
  const {
    Datas,
    Name,
    Routelabel,
    dataproperty,
    formik,
    setWordEntered,
    wordEntered,
  } = props;
  const [filteredData, setFilteredData] = useState(Datas);

  // valueToSubmit(wordEntered);
  useEffect(() => {
    if (Datas.length) setFilteredData(Datas);
  }, [Datas]);

  console.log({ filteredData });
  const ulRef = useRef();
  const inputRef = useRef();

  const onInputChange = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = Datas.filter((rowdata) => {
      return rowdata[dataproperty]
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });
    console.log(Datas);
    if (searchWord !== "") {
      setFilteredData(newFilter);
    }
    // else {
    //   setFilteredData(Datas);
    // }
  };
  useEffect(() => {
    inputRef.current.addEventListener("click", (event) => {
      event.stopPropagation();
      if (ulRef.current) ulRef.current.style.display = "flex ";
      onInputChange(event);
    });
    document.addEventListener("click", (event) => {
      if (ulRef.current) ulRef.current.style.display = "none";
    });
  }, []);
  // console.log(formik);
  return (
    <div className=" flex flex-col ">
      <label aria-labelledby={Name} className="">
        {Routelabel}
      </label>
      <input
        type="text"
        name={Name}
        className=""
        value={wordEntered}
        onBlur={formik?.handleBlur}
        placeholder="Search"
        ref={inputRef}
        autocomplete="off"
        onChange={onInputChange}
      />
      {formik?.touched[Name] && formik?.errors[Name] ? (
        <span data-testid="error-msg" className="text-errorText text-xs z-10">
          {formik?.errors[Name]}
        </span>
      ) : null}
      <div className=" w-full relative">
        <ul className="flex-col bg-white absolute hidden" ref={ulRef}>
          {filteredData.map((rowdata, index) => {
            return (
              <button
                type="button"
                key={index}
                onClick={(e) => {
                  inputRef.current.value = rowdata[dataproperty];
                  setWordEntered(rowdata[dataproperty]);
                  // console.log(">>>??>>>>????", rowdata[dataproperty]);
                  // // valueTosubmit = setValueTosubmit()
                  formik.setFieldValue(Name, rowdata[dataproperty]);
                }}
                className="bg-gray-200 mt-2 h-8 text-left"
              >
                {rowdata[dataproperty]}
              </button>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default SearchbarDropdown;
