import Badge from "../Badge";
import Card from "./Card";

const Features = () => {
  return (
    <div className="py-16">
      <div className="flex flex-col gap-4">
        <Badge title="...and more" icon="&#129321;" />
        <h1 className="text-textHead2 text-[48px] md:text-[56px] font-semibold leading-tight">
          Explore an array of features that elevate your{" "}
          <span className="text-orange">Productivity</span> to new heights
        </h1>
        <p className="text-xl text-textPara2 md:w-2/5 w-4/5">
          Discover the tools that will revolutionize the way you manage and
          optimize your operations
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 my-16">
        <Card
          title="Cross-Platform Compatibility"
          desc="Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device."
          icon="&#x2666;"
        />
        <Card
          title="Stay Informed with Essential Notifications"
          desc="Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket."
          icon="&#x2689;"
        />
        <Card
          title="Secure Data Encryption at all times"
          desc="Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times."
          icon="&#9930;"
        />
      </div>
    </div>
  );
};

export default Features;
