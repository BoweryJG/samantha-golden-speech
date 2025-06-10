#!/bin/bash

# Update Grid imports in all files
files=("src/components/Layout/Footer.tsx" "src/pages/Home.tsx" "src/pages/Contact.tsx" "src/pages/Services.tsx" "src/pages/About.tsx")

for file in "${files[@]}"; do
  # Replace Grid import
  sed -i '' 's/Grid,/Grid2 as Grid,/g' "$file"
  sed -i '' 's/Grid2 as Grid2 as Grid/Grid2 as Grid/g' "$file"
  
  # Replace Grid item props
  sed -i '' 's/item xs={12}/size={12}/g' "$file"
  sed -i '' 's/item xs={12} md={6}/size={{ xs: 12, md: 6 }}/g' "$file"
  sed -i '' 's/item xs={12} md={4}/size={{ xs: 12, md: 4 }}/g' "$file"
  sed -i '' 's/item xs={12} md={3}/size={{ xs: 12, md: 3 }}/g' "$file"
  sed -i '' 's/item xs={12} md={8}/size={{ xs: 12, md: 8 }}/g' "$file"
  sed -i '' 's/item xs={12} sm={6}/size={{ xs: 12, sm: 6 }}/g' "$file"
  sed -i '' 's/item xs={12} sm={4}/size={{ xs: 12, sm: 4 }}/g' "$file"
  sed -i '' 's/item xs={12} sm={6} md={4}/size={{ xs: 12, sm: 6, md: 4 }}/g' "$file"
  sed -i '' 's/item xs={12} sm={6} md={3}/size={{ xs: 12, sm: 6, md: 3 }}/g' "$file"
  sed -i '' 's/item xs={6} sm={3}/size={{ xs: 6, sm: 3 }}/g' "$file"
  sed -i '' 's/item xs={6} sm={4}/size={{ xs: 6, sm: 4 }}/g' "$file"
  
  # Remove standalone 'item' props
  sed -i '' 's/ item / /g' "$file"
done

echo "Grid components updated!"