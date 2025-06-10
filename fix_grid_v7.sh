#!/bin/bash

# Fix all Grid size props to xs/sm/md props for MUI v7
files=("src/components/Layout/Footer.tsx" "src/pages/Home.tsx" "src/pages/Contact.tsx" "src/pages/Services.tsx" "src/pages/About.tsx")

for file in "${files[@]}"; do
  # Replace size={{ xs: X, md: Y }} with xs={X} md={Y}
  sed -i '' 's/size={{ xs: 12, md: 6 }}/xs={12} md={6}/g' "$file"
  sed -i '' 's/size={{ xs: 12, md: 4 }}/xs={12} md={4}/g' "$file"
  sed -i '' 's/size={{ xs: 12, md: 3 }}/xs={12} md={3}/g' "$file"
  sed -i '' 's/size={{ xs: 12, md: 8 }}/xs={12} md={8}/g' "$file"
  sed -i '' 's/size={{ xs: 12, md: 2 }}/xs={12} md={2}/g' "$file"
  sed -i '' 's/size={{ xs: 12, sm: 6 }}/xs={12} sm={6}/g' "$file"
  sed -i '' 's/size={{ xs: 12, sm: 4 }}/xs={12} sm={4}/g' "$file"
  sed -i '' 's/size={{ xs: 12, sm: 6, md: 4 }}/xs={12} sm={6} md={4}/g' "$file"
  sed -i '' 's/size={{ xs: 12, sm: 6, md: 3 }}/xs={12} sm={6} md={3}/g' "$file"
  sed -i '' 's/size={{ xs: 6, sm: 3 }}/xs={6} sm={3}/g' "$file"
  sed -i '' 's/size={{ xs: 6, sm: 4 }}/xs={6} sm={4}/g' "$file"
  
  # Replace single size={X} with xs={X}
  sed -i '' 's/size={12}/xs={12}/g' "$file"
  
  # Fix the complex Footer Grid patterns
  sed -i '' 's/size={12} sm={6} md={2}/xs={12} sm={6} md={2}/g' "$file"
  sed -i '' 's/size={12} sm={6} md={3}/xs={12} sm={6} md={3}/g' "$file"
  sed -i '' 's/size={12} sm={6} md={4}/xs={12} sm={6} md={4}/g' "$file"
  sed -i '' 's/size={12} md={3}/xs={12} md={3}/g' "$file"
  sed -i '' 's/size={12} md={4}/xs={12} md={4}/g' "$file"
  sed -i '' 's/size={12} md={6}/xs={12} md={6}/g' "$file"
  sed -i '' 's/size={12} md={8}/xs={12} md={8}/g' "$file"
  sed -i '' 's/size={12} sm={6}/xs={12} sm={6}/g' "$file"
  sed -i '' 's/size={12} sm={4}/xs={12} sm={4}/g' "$file"
  
  # Add item prop back
  sed -i '' 's/<Grid xs=/<Grid item xs=/g' "$file"
  sed -i '' 's/<Grid item item/<Grid item/g' "$file"
done

echo "Grid components fixed for MUI v7!"