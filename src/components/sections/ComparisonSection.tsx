
import ScrollReveal from "../animations/ScrollReveal";
import { Check, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ComparisonSection = () => {
  // Comparison data
  const comparisonData = {
    headers: ["autoikigai.", "Hiring an SDR", "Marketing Agency", "Do It Yourself"],
    rows: [
      {
        title: "Time to get results",
        values: ["21-30 Days", "3 Months", "2-4 Weeks", "3-6 Months"]
      },
      {
        title: "Failure rate",
        values: ["Unlikely", "Medium", "High", "Very High"]
      },
      {
        title: "Price",
        values: ["Based On Results", "+$8,000/month", "+$5K+ Media Buying Budget", "$3K For Software, Tools + Time Wasted"]
      },
      {
        title: "Guarantees",
        values: [true, false, "Rarely", false]
      }
    ]
  };

  return (
    <section id="comparison" className="section bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center leading-tight">
            Let's compare your options
          </h2>
        </ScrollReveal>

        <div className="overflow-x-auto">
          {/* Desktop Table */}
          <div className="hidden md:block">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="border-none">
                  <TableHead className="w-1/5"></TableHead>
                  {comparisonData.headers.map((header, index) => (
                    <TableHead 
                      key={index} 
                      className={`w-1/5 text-center py-6 text-lg ${index === 0 ? "text-primary" : "text-foreground"}`}
                    >
                      {header}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.rows.map((row, rowIndex) => (
                  <TableRow 
                    key={rowIndex} 
                    className={rowIndex % 2 === 0 ? "bg-secondary/50 rounded-lg" : ""}
                  >
                    <TableCell className="font-semibold text-lg pl-8">{row.title}</TableCell>
                    {row.values.map((value, cellIndex) => (
                      <TableCell key={cellIndex} className="text-center py-6">
                        {typeof value === "boolean" ? (
                          value ? (
                            <div className="flex justify-center">
                              <div className="bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                                <Check className="h-6 w-6 text-green-500" />
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <div className="bg-red-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                                <X className="h-6 w-6 text-red-500" />
                              </div>
                            </div>
                          )
                        ) : (
                          <span className="text-base">{value}</span>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Version */}
          <div className="md:hidden space-y-8">
            {comparisonData.headers.map((header, columnIndex) => (
              <div key={columnIndex} className="mb-6">
                <h3 className={`text-xl font-semibold mb-4 ${columnIndex === 0 ? "text-primary" : "text-foreground"}`}>
                  {header}
                </h3>
                <div className="bg-card rounded-lg overflow-hidden">
                  {comparisonData.rows.map((row, rowIndex) => (
                    <div 
                      key={rowIndex}
                      className={`flex items-center justify-between p-4 ${
                        rowIndex % 2 === 0 ? "bg-secondary/50" : ""
                      }`}
                    >
                      <span className="font-medium">{row.title}</span>
                      <span className="ml-auto">
                        {typeof row.values[columnIndex] === "boolean" ? (
                          row.values[columnIndex] ? (
                            <div className="bg-green-900/30 w-8 h-8 rounded-full flex items-center justify-center">
                              <Check className="h-4 w-4 text-green-500" />
                            </div>
                          ) : (
                            <div className="bg-red-900/30 w-8 h-8 rounded-full flex items-center justify-center">
                              <X className="h-4 w-4 text-red-500" />
                            </div>
                          )
                        ) : (
                          row.values[columnIndex]
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
