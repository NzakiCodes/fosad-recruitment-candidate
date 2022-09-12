import React, { ReactNode } from "react";
import { OnboardingLayout } from "../../components/Layouts";
import { PageWithlayout } from "../_app";

const Onbording: PageWithlayout = () => {
  return <div>Do you know what {"you're"} looking for?</div>;
};

Onbording.title = "Do you know what you're looking for?";

Onbording.getLayout = function getLayout(page:ReactNode, title?:string){
    return<OnboardingLayout title={title?title:""}>{page}</OnboardingLayout>
}

export default Onbording;
