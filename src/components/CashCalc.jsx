import React, { useCallback, useEffect, useRef, useState } from "react";
import images from "../assets/image.js";
import { FaShareAlt } from "react-icons/fa";

const CashCalc = () => {
  const [Name, setName] = useState("");
  const [Mob, setMob] = useState("");
  const [Add, setAdd] = useState("");
  const [count2000, setCount2000] = useState(0);
  const [count500, setCount500] = useState(0);
  const [count200, setCount200] = useState(0);
  const [count100, setCount100] = useState(0);
  const [count50, setCount50] = useState(0);
  const [count20, setCount20] = useState(0);
  const [count10, setCount10] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count1, setCount1] = useState(0);
  const [total, setTotal] = useState(0);

  const CustDetails = useRef(null);

  const copyDetails = useCallback(() => {
    CustDetails.current?.select();
    window.navigator.clipboard.writeText(`
      Name: ${Name}
      Mob: ${Mob}
      Address: ${Add}
      -----------------------------
      2000 x ${count2000} = ${2000*count2000}
      500 x ${count500} = ${500*count500}
      200 x ${count200} = ${200*count200}
      100 x ${count100} = ${100*count100}
      50 x ${count50} = ${50*count50}
      20 x ${count20} = ${20*count20}
      10 x ${count10} = ${10*count10}
      5 x ${count5} = ${5*count5}
      2 x ${count2} = ${2*count2}
      1 x ${count1} = ${1*count1}
      ------------------------------
      Total Amount: ${total}
      `)

  }, [
    count2000,
    count500,
    count200,
    count100,
    count50,
    count20,
    count10,
    count5,
    count2,
    count1,
    total,
    Name,
    Mob,
    Add
  ])

  const TotalAmount = useCallback(() => {
    let total =
      2000 * count2000 +
      500 * count500 +
      200 * count200 +
      100 * count100 +
      50 * count50 +
      20 * count20 +
      10 * count10 +
      5 * count5 +
      2 * count2 +
      1 * count1;
    setTotal(total);
  }, [
    count2000,
    count500,
    count200,
    count100,
    count50,
    count20,
    count10,
    count5,
    count2,
    count1,
    total,
  ]);

  useEffect(() => {
    TotalAmount();
  }, [
    count2000,
    count500,
    count200,
    count100,
    count50,
    count20,
    count10,
    count5,
    count2,
    count1,
    total,
  ]);

  return (
    <div className="m-1">
      <div className="details flex justify-center items-center text-center gap-1 p-1 max-sm:flex-col">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          ref={CustDetails}
          placeholder="Enter Customer Name"
          className="bg-gray-100 p-1.5 rounded-md"
        />
        <label htmlFor="mob">Mob: </label>
        <input
          type="text"
          onChange={(e) => {
            setMob(e.target.value);
          }}
          ref={CustDetails}
          placeholder="Enter Customer Mob"
          className="bg-gray-100 p-1.5 rounded-md"
        />
        <label htmlFor="add">Address: </label>
        <input
          type="text"
          onChange={(e) => {
            setAdd(e.target.value);
          }}
          ref={CustDetails}
          placeholder="Enter Address"
          className="bg-gray-100 p-1.5 rounded-md"
        />
      </div>

      <fieldset className="border-1 m-1">
        <legend>Currency -</legend>

        <div className="flex gap-2 justify-center items-center text-center p-1 mb-1">
          <img
            src={images.twoThous}
            alt="2000 Note"
            className="w-[100px]"
          />
          <label htmlFor="twoThous" className="flex items-center gap-1">
            2000 <span className="text-xl text-center">&times;</span>{" "}
          </label>
          <input
            type="text"
            onChange={(e) => {
              setCount2000(e.target.value);
            }}
            id="twoThous"
            placeholder="0"
            className="text-center w-20 bg-gray-100 h-10 rounded-md outline-none"
          />
          <label htmlFor="twoThous1">=</label>
          <input
            type="text"
            value={2000 * count2000}
            name=""
            id="twoThous1"
            placeholder="0"
            readOnly
            className="text-center w-30 bg-gray-200 h-10 rounded-md font-bold outline-none"
          />
        </div>

        <div className="flex gap-2 justify-center items-center text-center p-1 mb-1">
          <img
            src={images.fiveHund}
            alt="500 Note"
            className="w-[100px]"
          />
          <label htmlFor="fiveHund" className="flex items-center gap-1">
            500 <span className="text-xl text-center">&times;</span>{" "}
          </label>
          <input
            type="text"
            onChange={(e) => {
              setCount500(e.target.value);
            }}
            id="fiveHund"
            placeholder="0"
            className="text-center w-20 bg-gray-100 h-10 rounded-md outline-none"
          />
          <label htmlFor="fiveHund1">=</label>
          <input
            type="text"
            value={500 * count500}
            name=""
            id="fiveHund1"
            placeholder="0"
            readOnly
            className="text-center w-30 bg-gray-200 h-10 rounded-md font-bold outline-none"
          />
        </div>

        <div className="flex gap-2 justify-center items-center text-center p-1 mb-1">
          <img
            src={images.twoHund}
            alt="200 Note"
            className="w-[100px]"
          />
          <label htmlFor="twoHund" className="flex items-center gap-1">
            200 <span className="text-xl text-center">&times;</span>{" "}
          </label>
          <input
            type="text"
            onChange={(e) => {
              setCount200(e.target.value);
            }}
            id="twoHund"
            placeholder="0"
            className="text-center w-20 bg-gray-100 h-10 rounded-md outline-none"
          />
          <label htmlFor="twoHund1">=</label>
          <input
            type="text"
            value={200 * count200}
            name=""
            id="twoHund1"
            placeholder="0"
            readOnly
            className="text-center w-30 bg-gray-200 h-10 rounded-md font-bold outline-none"
          />
        </div>

        <div className="flex gap-2 justify-center items-center text-center p-1 mb-1">
          <img
            src={images.oneHund}
            alt="100 Note"
            className="w-[100px]"
          />
          <label htmlFor="oneHund" className="flex items-center gap-1">
            100 <span className="text-xl text-center">&times;</span>{" "}
          </label>
          <input
            type="text"
            onChange={(e) => {
              setCount100(e.target.value);
            }}
            id="oneHund"
            placeholder="0"
            className="text-center w-20 bg-gray-100 h-10 rounded-md outline-none"
          />
          <label htmlFor="oneHund1">=</label>
          <input
            type="text"
            value={100 * count100}
            name=""
            id="oneHund1"
            placeholder="0"
            readOnly
            className="text-center w-30 bg-gray-200 h-10 rounded-md font-bold outline-none"
          />
        </div>

        <div className="flex gap-2 justify-center items-center text-center p-1 mb-1">
          <img
            src={images.fifty}
            alt="50 Note"
            className="w-[100px]"
          />
          <label htmlFor="fifty" className="flex items-center gap-1">
            50 <span className="text-xl text-center">&times;</span>{" "}
          </label>
          <input
            type="text"
            onChange={(e) => {
              setCount50(e.target.value);
            }}
            id="fifty"
            placeholder="0"
            className="text-center w-20 bg-gray-100 h-10 rounded-md outline-none"
          />
          <label htmlFor="fifty1">=</label>
          <input
            type="text"
            value={50 * count50}
            name=""
            id="fifty1"
            placeholder="0"
            readOnly
            className="text-center w-30 bg-gray-200 h-10 rounded-md font-bold outline-none"
          />
        </div>

        <div className="flex gap-2 justify-center items-center text-center p-1 mb-1">
          <img
            src={images.twenty}
            alt="20 Note"
            className="w-[100px]"
          />
          <label htmlFor="twenty" className="flex items-center gap-1">
            20 <span className="text-xl text-center">&times;</span>{" "}
          </label>
          <input
            type="text"
            onChange={(e) => {
              setCount20(e.target.value);
            }}
            id="twenty"
            placeholder="0"
            className="text-center w-20 bg-gray-100 h-10 rounded-md outline-none"
          />
          <label htmlFor="twenty1">=</label>
          <input
            type="text"
            value={20 * count20}
            name=""
            id="twenty1"
            placeholder="0"
            readOnly
            className="text-center w-30 bg-gray-200 h-10 rounded-md font-bold outline-none"
          />
        </div>

        <div className="flex gap-2 justify-center items-center text-center  p-1 mb-1">
          <img
            src={images.ten}
            alt="10 Note"
            className="w-[100px]"
          />
          <label htmlFor="ten" className="flex items-center gap-1">
            10 <span className="text-xl text-center">&times;</span>{" "}
          </label>
          <input
            type="text"
            onChange={(e) => {
              setCount10(e.target.value);
            }}
            id="ten"
            placeholder="0"
            className="text-center w-20 bg-gray-100 h-10 rounded-md outline-none"
          />
          <label htmlFor="ten1">=</label>
          <input
            type="text"
            value={10 * count10}
            name=""
            id="ten1"
            placeholder="0"
            readOnly
            className="text-center w-30 bg-gray-200 h-10 rounded-md font-bold outline-none"
          />
        </div>
      </fieldset>

      <fieldset className="border-1 m-1">
        <legend> Coins - </legend>

        <div className="flex gap-2 justify-center items-center text-center p-1 mb-1">
          <img
            src={images.five}
            alt="5 Coin"
            className="w-[50px]"
          />
          <label htmlFor="five" className="flex items-center gap-1">
            5 <span className="text-xl text-center">&times;</span>{" "}
          </label>
          <input
            type="text"
            onChange={(e) => {
              setCount5(e.target.value);
            }}
            id="five"
            placeholder="0"
            className="text-center w-20 bg-gray-100 h-10 rounded-md outline-none"
          />
          <label htmlFor="five1">=</label>
          <input
            type="text"
            value={5 * count5}
            name=""
            id="five1"
            placeholder="0"
            readOnly
            className="text-center w-30 bg-gray-200 h-10 rounded-md font-bold outline-none"
          />
        </div>

        <div className="flex gap-2 justify-center items-center text-center p-1 mb-1">
          <img
            src={images.two}
            alt="2 Coin"
            className="w-[50px]"
          />
          <label htmlFor="two" className="flex items-center gap-1">
            2 <span className="text-xl text-center">&times;</span>{" "}
          </label>
          <input
            type="text"
            onChange={(e) => {
              setCount2(e.target.value);
            }}
            id="two"
            placeholder="0"
            className="text-center w-20 bg-gray-100 h-10 rounded-md outline-none"
          />
          <label htmlFor="two1">=</label>
          <input
            type="text"
            value={2 * count2}
            name=""
            id="two1"
            placeholder="0"
            readOnly
            className="text-center w-30 bg-gray-200 h-10 rounded-md font-bold outline-none"
          />
        </div>

        <div className="flex gap-2 justify-center items-center text-center p-1 mb-1">
          <img
            src={images.one}
            alt="1 Coin"
            className="w-[50px]"
          />
          <label htmlFor="one" className="flex items-center gap-1">
            1 <span className="text-xl text-center">&times;</span>{" "}
          </label>
          <input
            type="text"
            onChange={(e) => {
              setCount1(e.target.value);
            }}
            id="one"
            placeholder="0"
            className="text-center w-20 bg-gray-100 h-10 rounded-md outline-none"
          />
          <label htmlFor="one1">=</label>
          <input
            type="text"
            value={1 * count1}
            name=""
            id="one1"
            placeholder="0"
            readOnly
            className="text-center w-30 bg-gray-200 h-10 rounded-md font-bold outline-none"
          />
        </div>
      </fieldset>

      <div className="flex items-center justify-center gap-4 h-14">
        <label htmlFor="total" className="font-bold">
          Total Amount:{" "}
        </label>
        <input
          type="text"
          value={total}
          id="total"
          placeholder="0"
          readOnly
          ref={CustDetails}
          className="w-40 text-center bg-[blue] text-white font-bold text-2xl outline-none rounded-md"
        />
        <button onClick={copyDetails} className="bg-black text-white p-1 px-2 rounded-sm flex items-center gap-1 justify-center"> <FaShareAlt /> Share</button>
      </div>

      
    </div>
  );
};

export default CashCalc;
