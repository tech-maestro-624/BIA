import { TrendingUp, Users, Award, Briefcase } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "5000+",
      label: "Students Graduated",
      description: "Successful professionals trained"
    },
    {
      icon: Briefcase,
      number: "95%",
      label: "Job Placement Rate",
      description: "Within 6 months of graduation"
    },
    {
      icon: Award,
      number: "4.8/5",
      label: "Student Satisfaction",
      description: "Average course rating"
    },
    {
      icon: TrendingUp,
      number: "150%",
      label: "Average Salary Increase",
      description: "Post-graduation career growth"
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            These numbers reflect our commitment to providing world-class education 
            and career transformation for our students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="text-primary-600" size={32} />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats 