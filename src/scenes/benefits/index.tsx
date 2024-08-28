import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/solid"
import { SelectedPage } from "../../shared/types"
import { motion } from "framer-motion"
import HText from "./HText"



type Props = {
    setSelectedPage: (value: SelectedPage) => void,
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id={`#${SelectedPage.Benefits}`}
            className="mx-auto min-h-full w-5/6 py-20"
        >
             {/** Header */}
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <div className="md:my-5 md-w-3/5">
                    <HText>more than just a gym</HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </div>
                

            </motion.div>

             {/** Benefits */}
            <motion.div
                className="mt-5 items-center justify-between gap-8 md:flex"
            >
                {benefits.map((benefit)=>{
                    return <Benef
                })}
            </motion.div>
        </section>
    )
}

export default Benefits