import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  const [] = useState(false);
  return (
    <div className=" border border-black p-2 m-2">
      <h2 className="font-bold text-xl">{title}</h2>

      {isVisible ? (
        <button
          className="border border-black rounded-md cursor-pointer"
          onClick={() => setIsVisible(false)}
        >
          Hide
        </button>
      ) : (
        <button
          className="border border-black rounded-md cursor-pointer"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("team");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <p>This is about Instamart page</p>

      <Section
        title={"About Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() =>setVisibleSection("about")}
      />

      <Section
        title={"Team Instamart"}
        description={
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() =>setVisibleSection("team")
        }
      />
      <Section
        title={"Careers"}
        description={
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        isVisible={visibleSection === "careers"}
        setIsVisible={() =>setVisibleSection("careers")}
      />
      <Section
        title={"Details"}
        description={
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        isVisible={visibleSection === "Details"}
        setIsVisible={() =>setVisibleSection("Details")}
      />
      <Section
        title={"Products"}
        description={
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        isVisible={visibleSection === "Products"}
        setIsVisible={() => setVisibleSection("Products")}
      />
      {/*   
  <About Instamart/>
  <Contact Instamart/> */}
    </div>
  );
};

export default Instamart;
