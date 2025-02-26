# Data Quality Metrics
Metrics that provide meaningful insights to perform quality assessment on maps across multiple time intervals.

Creates a contingency table for sample data showing the data quality assessment of categorical variables (strata types) between reference data and modeled data during time intervals including Commission, Omission for each category.

False alarms and Misses at each time point are propagated to influence the result during time interval.

The table is then converted from sample data to entire spatial extent using the formula 5.2 from Chapter 5 of Metrics that Make a Difference [1]. 

The result is then used to generate novel graphs highlighting the relevant change classes, providing unbiased, useful and meaningful conclusion for data quality during land change assessment across multiple time intervals.

# References

[1] Pontius, Robert Gilmore, "Metrics That Make a Difference: How to Analyze Change and Error" (2022)

