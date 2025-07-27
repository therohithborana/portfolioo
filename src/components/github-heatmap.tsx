import { Card, CardContent } from "@/components/ui/card";

export function GitHubHeatmap() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold mb-2">GitHub Activity</h3>
          <p className="text-sm text-muted-foreground">
            My coding activity over the past year
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://ghchart.rshah.org/40c463/therohithborana"
            alt="GitHub Contribution Graph"
            className="w-full max-w-8xl h-auto"
          />
        </div>
        <div className="flex justify-center items-center gap-2 mt-4 text-xs text-muted-foreground">
          <span>Less</span>
          <div className="flex gap-1">
            {['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'].map((color, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </CardContent>
    </Card>
  );
} 