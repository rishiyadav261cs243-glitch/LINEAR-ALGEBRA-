var C3={n:3,title:"Determinants",
sec:[
["3.1 Introduction to determinants","Cofactor expansion, triangular matrices",`
<p>For a 2×2 matrix, det [a b; c d] = ad − bc. For n ≥ 2, the <b>(i, j) cofactor</b> of A is Cᵢⱼ = (−1)ⁱ⁺ʲ det Aᵢⱼ, where Aᵢⱼ is A with row i and column j deleted. The determinant is defined by expansion along the first row: det A = a₁₁C₁₁ + a₁₂C₁₂ + … + a₁ₙC₁ₙ.</p>
<p><b>Theorem 1.</b> det A can be computed by cofactor expansion across any row or down any column: det A = aᵢ₁Cᵢ₁ + … + aᵢₙCᵢₙ = a₁ⱼC₁ⱼ + … + aₙⱼCₙⱼ.</p>
<pre>| 2 −1  3 |
| 0  4  1 |  = 2(4·(−2) − 1·2) − (−1)(0·(−2) − 1·5) + 3(0·2 − 4·5) = −85
| 5  2 −2 |</pre>
<p><b>Theorem 2.</b> If A is triangular, det A is the product of its diagonal entries.</p>
<details><summary>Proof</summary><p>Induct on n. For an upper triangular matrix, expand down the first column: every entry below a₁₁ is 0, so det A = a₁₁ · det A₁₁. The submatrix A₁₁ is upper triangular of size n − 1, so by induction its determinant is the product of its diagonal entries. The lower triangular case is symmetric (expand along the first row). ∎</p></details>
<div class="note"><b>Notable points.</b> Expand along the row or column with the most zeros. The sign pattern of cofactors is a checkerboard: + − + … starting with + at the top left. det I = 1.</div>`],
["3.2 Properties of determinants","Row operations, invertibility, multiplicativity",`
<p><b>Theorem 3 (row operations).</b> Let B be obtained from a square matrix A by one row operation. (a) Adding a multiple of one row to another: det B = det A. (b) Swapping two rows: det B = −det A. (c) Multiplying a row by k: det B = k · det A.</p>
<p>Idea of the proof: verify the three rules for 2×2 matrices directly, then induct on n by expanding along a row not involved in the operation; each cofactor is a smaller determinant to which the induction hypothesis applies.</p>
<p><b>Corollary.</b> A matrix with two equal rows has determinant 0, since swapping them leaves the matrix unchanged but flips the sign (d = −d, so d = 0). The same holds if a row is a multiple of another, or a row is zero.</p>
<p><b>Theorem 4.</b> A square matrix A is invertible if and only if det A ≠ 0.</p>
<details><summary>Proof</summary><p>Row reduce A to an echelon form U using replacements and r swaps. By Theorem 3, det A = (−1)ʳ det U. Since U is triangular, det U is the product of its diagonal entries. This product is nonzero exactly when all n diagonal entries are nonzero, that is, when A has n pivots, which is the same as A being invertible. ∎</p></details>
<p><b>Theorem 5.</b> det Aᵀ = det A.</p>
<details><summary>Proof</summary><p>If A is not invertible, neither is Aᵀ, so both determinants are 0. If A is invertible, write A as a product of elementary matrices, A = E₁…Eₖ. For each elementary matrix det E = det Eᵀ (check the three types), and Aᵀ = Eₖᵀ…E₁ᵀ. Using multiplicativity below, det Aᵀ = ∏ det Eᵢᵀ = ∏ det Eᵢ = det A. ∎</p></details>
<p><b>Theorem 6 (multiplicative property).</b> det(AB) = (det A)(det B) for n×n matrices A and B.</p>
<details><summary>Proof</summary><p>If A is not invertible, then AB is not invertible, so both sides are 0. If A is invertible, write A = E₁…Eₖ. For an elementary matrix E, det(EB) = (det E)(det B), since left-multiplying by E performs one row operation on B and Theorem 3 gives the factor det E. Applying this k times, det(AB) = (det E₁)…(det Eₖ)(det B) = (det A)(det B). ∎</p></details>
<div class="note"><b>Notable points.</b> det(kA) = kⁿ det A, not k det A. det A⁻¹ = 1/det A, because det A · det A⁻¹ = det I = 1. det(A + B) ≠ det A + det B in general. The best way to compute a large determinant is to row reduce and track swaps and scalings.</div>`],
["3.3 Cramer's rule, inverse and adjugate","Formulas for solutions and inverses",`
<p>For A (n×n) and b in ℝⁿ, let Aᵢ(b) be A with column i replaced by b.</p>
<p><b>Theorem 7 (Cramer's rule).</b> If A is invertible, the unique solution of Ax = b has xᵢ = det Aᵢ(b) / det A.</p>
<details><summary>Proof</summary><p>Let Iᵢ(x) be the identity with column i replaced by x. Then A·Iᵢ(x) has columns Ae₁, …, Ax, …, Aeₙ, which are a₁, …, b, …, aₙ. So A·Iᵢ(x) = Aᵢ(b). Taking determinants, (det A)(det Iᵢ(x)) = det Aᵢ(b). Expanding along row i, det Iᵢ(x) = xᵢ. Hence (det A) xᵢ = det Aᵢ(b). ∎</p></details>
<p>The <b>adjugate</b> adj A is the transpose of the cofactor matrix: its (i, j) entry is Cⱼᵢ.</p>
<p><b>Theorem 8.</b> A · adj A = (det A) I. Hence if det A ≠ 0, A⁻¹ = (1/det A) adj A.</p>
<details><summary>Proof</summary><p>The (i, j) entry of A·adj A is Σₖ aᵢₖCⱼₖ. If i = j this is cofactor expansion along row i, so it equals det A. If i ≠ j, it is the cofactor expansion along row j of the matrix obtained from A by replacing row j with row i. That matrix has two equal rows, so its determinant is 0. Hence A·adj A has det A on the diagonal and 0 elsewhere. ∎</p></details>
<pre>A = [2 1; 5 3],  det A = 1,  adj A = [3 −1; −5 2] = A⁻¹</pre>
<div class="note"><b>Notable points.</b> Cramer's rule and the adjugate are great for theory and 2×2 or 3×3 problems, but slow for large systems (row reduction is much faster). For an integer matrix with det = ±1, the adjugate formula shows the inverse also has integer entries. det(adj A) = (det A)ⁿ⁻¹.</div>`],
["3.4 Determinants, area and volume","Geometry of det",`
<p><b>Theorem 9.</b> If A is 2×2, the area of the parallelogram determined by its columns is |det A|. If A is 3×3, the volume of the parallelepiped determined by its columns is |det A|.</p>
<details><summary>Proof (2×2)</summary><p>Row-style column operations that add a multiple of one column to another leave both the determinant and the area unchanged (a shear keeps base and height). Using them, reduce the columns to a diagonal matrix with entries p and q: the parallelogram becomes a rectangle with area |pq| = |det|. If the columns are dependent, both the area and the determinant are 0. ∎</p></details>
<p><b>Theorem 10.</b> If T(x) = Ax with A 2×2 (or 3×3), then for any region S in the plane (or space), area{T(S)} = |det A| · area{S} (or volume).</p>
<details><summary>Proof for a parallelogram</summary><p>Let S be spanned by the columns of B = [b₁ b₂]. T(S) is spanned by Ab₁ and Ab₂, the columns of AB. So area{T(S)} = |det AB| = |det A||det B| = |det A| · area{S}. A general region is approximated by tiny parallelograms, so the same factor applies. ∎</p></details>
<p>Example: the triangle with vertices (1, 1), (4, 2), (2, 5) has area ½|det [3 1; 1 4]| = 11/2, using the edge vectors from (1, 1).</p>
<div class="note"><b>Notable points.</b> The sign of det A tells whether T preserves or reverses orientation. det A = 0 means T collapses the plane (or space) onto a lower-dimensional set. The ellipse x²/a² + y²/b² ≤ 1 is the image of the unit disk under diag(a, b), so its area is ab · π.</div>`]],
pr:[
["Compute det [2 −1 3; 0 4 1; 5 2 −2].","Expand along the first row: 2(−8 − 2) − (−1)(0 − 5) + 3(0 − 20) = −20 − 5 − 60 = −85."],
["Compute det [1 2 3; 2 5 7; 3 7 11] by row reduction.","R2 − 2R1 → (0, 1, 1), R3 − 3R1 → (0, 1, 2), R3 − R2 → (0, 0, 1). Only replacements were used, so det = 1·1·1 = 1."],
["A and B are 4×4 with det A = 3 and det B = −2. Find det(A²B⁻¹Aᵀ).","det(A²) = 9, det(B⁻¹) = −1/2, det(Aᵀ) = 3. The product is 9 · (−1/2) · 3 = −27/2."],
["Use Cramer's rule to solve x + y + z = 6, 2x − y + z = 3, x + 2y − z = 2.","det A = 7. Replacing columns gives determinants 7, 14, 21. So x = 1, y = 2, z = 3."],
["Find the area of the triangle with vertices (1, 1), (4, 2), (2, 5).","Edge vectors from (1, 1) are (3, 1) and (1, 4). Area = ½|3·4 − 1·1| = 11/2."],
["For which h is [1 2 3; 4 5 6; 7 8 h] singular?","R2 − 4R1 → (0, −3, −6); R3 − 7R1 → (0, −6, h − 21). R3 − 2R2 → (0, 0, h − 9). Singular exactly when h = 9."]],
pb:(typeof P3!=="undefined"?P3:[]),
qz:[["A triangular 3×3 matrix has diagonal entries 2, −1, 4. Its determinant is…",["−8","5","8","0"],0],
["Swapping two rows of a square matrix…",["Leaves det unchanged","Multiplies det by −1","Doubles det","Makes det 0"],1],
["A is 3×3 with det A = 2. Then det(3A) equals…",["6","18","54","8"],2],
["A square matrix A is invertible if and only if…",["det A = 0","det A ≠ 0","A has two equal rows","trace A ≠ 0"],1]],
sb:[["Prove that if A is invertible, det(A⁻¹) = 1/det A.","Since AA⁻¹ = I, the multiplicative property gives (det A)(det A⁻¹) = det I = 1. So det A ≠ 0 and det A⁻¹ = 1/det A."],
["Compute det [1 2 0; 3 −1 4; 0 5 2] by cofactor expansion along the first row.","1·((−1)(2) − 4·5) − 2·(3·2 − 4·0) + 0 = 1·(−22) − 2·6 = −22 − 12 = −34."],
["Use Cramer's rule to solve 3x + 2y = 7 and x − y = 1.","det A = 3(−1) − 2(1) = −5. For x: det [7 2; 1 −1] = −9, so x = 9/5. For y: det [3 7; 1 1] = −4, so y = 4/5. Check: 27/5 + 8/5 = 7 and 9/5 − 4/5 = 1."]]};
