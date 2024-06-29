import Card from "./Card";
import styles from "./Card.module.css";
const CardContainer = () => {
  return (
    <div className={styles.container}>
      <Card
        image_width={500}
        icon={"/icons/img_2.png"}
        image={"/images/afsimage2.png"}
        description={
          "\n" +
          "A school's infrastructure refers to the physical facilities and resources that support teaching, learning, and other school activities. Some key aspects of a school's infrastructure include:Having a well-designed and well-maintained infrastructure is essential for creating a conducive learning ."
        }
        title={"Infrastructure"}
        footer={true}
        anchor="/school-life"   
      />
      <Card
        header_color={"#0f1744"}
        image_width={500}
        icon={"/icons/img_1.png"}
        image={"/images/afsimg.JPG"}
        description={
          "- Hands-on learning spaces for science, technology, engineering, and mathematics (STEM) subjects Equipped with basic equipment, tools, and materials for experiments and investigations - Foster curiosity, critical thinking, and problem-solving skills Encourage students ."
        }
        title={"school Advance labs"}
        footer={true}
        anchor="/steam-subjects"
      />
      <Card
        image_width={500}
        header_color={"#050b29"}
        icon={"/icons/img.png"}
        image={"/images/image 113.png"}
        description={
          "- State-of-the-art facilities with cutting-edge technology and equipment Specialized labs for specific subjects like physics, chemistry, biology, and computer science High-end equipment like microscopes, spectrophotometers, and 3D printers - Support advanced research, innovation ."
        }
        title={" bilogical labs "}
        footer={true}
        anchor="/admission"
      />
    </div>
    //asdf
  );
};
export default CardContainer;
