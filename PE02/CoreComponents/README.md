Input
The CoreComponents mobile app accepts input in the form of the user's favorite course, which they can enter through a TextInput component. Additionally, the app internally defines two arrays for courses: coreRequirements and depthOfStudyCourses, representing the core and depth of study courses for the MSCS program.

Process
The app uses React Native to create a scrollable interface using core components like View, Text, ScrollView, Image, and TextInput. The CourseList component organizes and displays the courses. The key enhancement is the backgroundColor styling, which highlights the titles "Core Requirements" and "Depth of Study Courses" in yellow, adding visual emphasis. Upon pressing the "CityU's Catalog" link, the app uses Linking to open the CityU's catalog URL in the device's default browser.

Output
The output is a user-friendly interface showcasing MSCS courses, categorized into core requirements and depth of study courses. Users can easily navigate the course list, enter their favorite course, and access CityU's catalog for more information. The yellow background for specific titles aids in quickly identifying critical course categories.
