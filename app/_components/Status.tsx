import { Card } from "@/components/ui/card";
import { Section } from "./Section";

export const Status = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4 mt-16">
      <Card className="flex-[2] flex flex-col gap-2 p-8 ">
        <h3 className="text-3xl font-caption"> Work Experiences </h3>

        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 dark:ring-gray-900 ">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <circle cx="512" cy="512" r="512" fill="#0098ff" />
                <path
                  d="M696.8 281H475.66v225.45L545.88 427h115.5l-88.17 83.75 93.71 156.49H560.66l-49.93-96.66-35.07 33.82v62.83h-96.1V281H327.2a46.2 46.2 0 0 0-46.2 46.2v369.6a46.2 46.2 0 0 0 46.2 46.2h369.6a46.2 46.2 0 0 0 46.2-46.2V327.2a46.2 46.2 0 0 0-46.2-46.2z"
                  fill="#fff"
                />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold">
              Final Year Internship: Backend Developer
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                Latest
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 2024 - July 2024
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              tempora odio at voluptate beatae debitis. Possimus quasi tempora
              consectetur optio autem delectus ex quae. Obcaecati molestias esse
              nihil deserunt dicta?
            </p>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <svg
                className="w-3.5 h-3.5 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>{" "}
              Download ZIP
            </a>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 dark:ring-gray-900 dark:bg-blue-900 p-0.5">
              <img src="https://seekvectorlogo.com/wp-content/uploads/2019/08/intact-insurance-vector-logo.png" />
            </span>
            <h3 className="mb-1 text-lg font-semibold ">
              Gap year: Fullstack Developer
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              October 2022 - July 2023
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              error reprehenderit quos cum perspiciatis iste magni rem
              obcaecati, maiores magnam tempora minima voluptatem tenetur, neque
              numquam facilis harum consequatur facere?
            </p>
          </li>
          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 dark:ring-gray-900 dark:bg-blue-900">
            <img src="https://companieslogo.com/img/orig/KD-f1c759cb.png?t=1720244492" className="w-2"/>
            </span>
            <h3 className="mb-1 text-lg font-semibold ">DevOps Internship</h3>
            <div className="flex items-center">
              <h4 className="text-md">Kyndryl</h4>
              <time className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                May 2022 - August 2022
              </time>
            </div>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              dolorum ipsum. Delectus minus perspiciatis quisquam dolores illo
              distinctio porro architecto quibusdam deleniti, et suscipit, velit
              quasi iusto nisi odit accusamus?
            </p>
          </li>
        </ol>
      </Card>
      <Card className="flex-1 p-8">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat
          dolores inventore facilis nisi aliquid a perferendis voluptatibus, sed
          vel eveniet numquam qui quisquam eaque ad pariatur harum! Corporis,
          accusantium.
        </p>
      </Card>
    </Section>
  );
};
