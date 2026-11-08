var C2={n:2,title:"Matrix algebra",
sec:[
["2.1 Matrix operations","Sum, product, powers, transpose",`
<p>Matrices of the same size add entry by entry. For A (m×n) and B (n×p), the product AB is m×p. Its column j is A times column j of B, and its (i, j) entry is the row-column sum aᵢ₁b₁ⱼ + … + aᵢₙbₙⱼ. Powers Aᵏ are defined for square A. The <b>transpose</b> Aᵀ swaps rows and columns.</p>
<pre>[ 1 2 ] [ 0 1 ]   [ 2 1 ]       [ 0 1 ] [ 1 2 ]   [ 3 4 ]
[ 3 4 ] [ 1 0 ] = [ 4 3 ]       [ 1 0 ] [ 3 4 ] = [ 1 2 ]</pre>
<p><b>Theorem 1.</b> (a) A(BC) = (AB)C. (b) A(B + C) = AB + AC and (A + B)C = AC + BC. (c) (AB)ᵀ = BᵀAᵀ. (d) (A + B)ᵀ = Aᵀ + Bᵀ.</p>
<details><summary>Proof of (c)</summary><p>The (i, j) entry of (AB)ᵀ is the (j, i) entry of AB, which is Σₖ aⱼₖbₖᵢ. The (i, j) entry of BᵀAᵀ is Σₖ (Bᵀ)ᵢₖ(Aᵀ)ₖⱼ = Σₖ bₖᵢaⱼₖ. The two sums are equal. ∎</p></details>
<div class="note"><b>Notable points.</b> In general AB ≠ BA. AB = AC does not imply B = C. AB = 0 does not imply A = 0 or B = 0. The order reverses under transpose: (ABC)ᵀ = CᵀBᵀAᵀ. (A + B)² = A² + 2AB + B² only when AB = BA.</div>`],
["2.2 The inverse of a matrix","Inverse, elementary matrices, algorithm",`
<p>A square matrix A is <b>invertible</b> if there is C with AC = CA = I. Then C is unique and written A⁻¹. For a 2×2 matrix, A = [a b; c d] is invertible exactly when ad − bc ≠ 0, and then A⁻¹ = (1/(ad − bc))[d −b; −c a].</p>
<p><b>Theorem 2.</b> If A and B are invertible n×n matrices, AB is invertible and (AB)⁻¹ = B⁻¹A⁻¹. Also (Aᵀ)⁻¹ = (A⁻¹)ᵀ.</p>
<details><summary>Proof</summary><p>(AB)(B⁻¹A⁻¹) = A(BB⁻¹)A⁻¹ = AA⁻¹ = I, and (B⁻¹A⁻¹)(AB) = B⁻¹(A⁻¹A)B = I. For the transpose, Aᵀ(A⁻¹)ᵀ = (A⁻¹A)ᵀ = Iᵀ = I, and similarly on the other side. ∎</p></details>
<p>An <b>elementary matrix</b> is the identity with one row operation applied. Left-multiplying A by it performs that row operation on A, and it is invertible (undo the operation).</p>
<p><b>Theorem 3.</b> A is invertible if and only if A is row equivalent to I. Any sequence of row operations reducing A to I, applied to I, produces A⁻¹, so row reduce [A I] to [I A⁻¹].</p>
<details><summary>Proof</summary><p>If A ~ I, then Eₖ…E₁A = I for elementary matrices Eᵢ, so A⁻¹ = Eₖ…E₁. Conversely if A is invertible, Ax = 0 forces x = A⁻¹0 = 0, so there are no free variables and A has n pivots; being square, its reduced form is I. ∎</p></details>
<div class="note"><b>Notable points.</b> Only square matrices have inverses. If A is invertible, Ax = b has the unique solution x = A⁻¹b. If A has a row or column of zeros, it is not invertible.</div>`],
["2.3 The Invertible Matrix Theorem","Many equivalent conditions",`
<p><b>Theorem 4 (Invertible Matrix Theorem).</b> For a square n×n matrix A, the following are equivalent: (a) A is invertible. (b) A is row equivalent to I. (c) A has n pivot positions. (d) Ax = 0 has only the trivial solution. (e) The columns of A are linearly independent. (f) Ax = b has a solution for every b. (g) The columns of A span ℝⁿ. (h) There is C with CA = I. (i) There is D with AD = I. (j) Aᵀ is invertible.</p>
<details><summary>Proof of the main chain</summary><p>(a)⇒(d): if Ax = 0 then x = A⁻¹Ax = 0. (d)⇒(c): no free variables means every column is a pivot column, so n pivots. (c)⇒(b): n pivots in an n×n matrix give reduced form I. (b)⇒(a): by Theorem 3. (a)⇒(f): x = A⁻¹b. (f)⇒(c): a solution for every b means a pivot in every row (Chapter 1, Theorem 5), which is n pivots. (d)⇔(e) and (f)⇔(g) are restatements. (h)⇒(d): if Ax = 0 then x = CAx = 0. (i)⇒(f): x = Db solves Ax = b. Finally (a)⇒(h),(i) take C = D = A⁻¹, and (a)⇔(j) is Theorem 2. ∎</p></details>
<div class="note"><b>Notable points.</b> For square matrices, a one-sided inverse is automatically two-sided: AB = I implies BA = I. The theorem is false for non-square matrices. Use it to avoid computing an inverse when you only need to know whether one exists.</div>`],
["2.4 Partitioned matrices and LU factorization","Block products, LU, uniqueness",`
<p>Matrices can be split into blocks and multiplied block by block when the sizes fit: [A B; 0 C][D E; 0 F] = [AD AE+BF; 0 CF]. If A and C are invertible, [A B; 0 C] is invertible with inverse [A⁻¹ −A⁻¹BC⁻¹; 0 C⁻¹].</p>
<p><b>Theorem 5 (LU factorization).</b> If A can be reduced to an echelon form U using only row replacements that add a multiple of a row to a row below it, then A = LU with L unit lower triangular (1s on the diagonal).</p>
<details><summary>Proof</summary><p>Each such operation is left-multiplication by a unit lower triangular matrix Eᵢ. So Eₚ…E₁A = U, hence A = (E₁⁻¹…Eₚ⁻¹)U. Inverses and products of unit lower triangular matrices are unit lower triangular, so L = E₁⁻¹…Eₚ⁻¹ qualifies. The entries of L below the diagonal are the multipliers used. ∎</p></details>
<pre>[ 2 1 1 ]   [ 1 0 0 ] [ 2 1 1 ]
[ 4 3 3 ] = [ 2 1 0 ] [ 0 1 1 ]
[ 8 7 9 ]   [ 4 3 1 ] [ 0 0 2 ]</pre>
<p><b>Solving Ax = b.</b> Solve Ly = b by forward substitution, then Ux = y by back substitution. The expensive row reduction is done once and reused for many b.</p>
<p><b>Uniqueness.</b> If A is invertible and A = L₁U₁ = L₂U₂, then L₂⁻¹L₁ = U₂U₁⁻¹. The left side is unit lower triangular, the right side is upper triangular, so both equal I, giving L₁ = L₂ and U₁ = U₂.</p>
<div class="note"><b>Notable points.</b> Some matrices need row swaps first (for example [0 1; 1 0]), giving PA = LU with a permutation matrix P. Counting operations, LU is much cheaper than computing A⁻¹.</div>`],
["2.5 Subspaces, dimension and rank","Col A, Nul A, basis, Rank Theorem",`
<p>A <b>subspace</b> H of ℝⁿ contains 0 and is closed under addition and scalar multiplication. <b>Col A</b> is the span of the columns of A. <b>Nul A</b> is the solution set of Ax = 0. Both are subspaces. A <b>basis</b> of H is a linearly independent set that spans H, and <b>dim H</b> is the number of vectors in any basis. The <b>rank</b> of A is dim Col A.</p>
<p><b>Theorem 6 (Rank Theorem).</b> For an m×n matrix A, rank A + dim Nul A = n. Also rank A = rank Aᵀ.</p>
<details><summary>Proof</summary><p>The pivot columns of A are linearly independent and every other column is a combination of them, so they form a basis of Col A; hence rank A = number of pivot columns. Each non-pivot column gives one free variable, and the corresponding solutions in parametric form give a basis of Nul A, so dim Nul A = number of free variables. Pivot columns plus free variables account for all n columns. For the second claim, the nonzero rows of an echelon form of A form a basis of Row A, and there is one per pivot, so dim Row A = rank A. But Row A = Col Aᵀ. ∎</p></details>
<div class="note"><b>Notable points.</b> The basis of Col A must use the pivot columns of the original A, not of the echelon form. Any p independent vectors in a p-dimensional subspace form a basis. An m×n matrix has rank at most min(m, n).</div>`],
["2.6 Leontief model and computer graphics","Two applications",`
<p><b>Leontief input-output model.</b> If x is the production vector, C the consumption matrix and d the final demand, then x = Cx + d, so (I − C)x = d and x = (I − C)⁻¹d when I − C is invertible. If C has nonnegative entries and every column sum is below 1, I − C is invertible.</p>
<p><b>Homogeneous coordinates.</b> A point (x, y) is written (x, y, 1). A translation by (h, k) becomes the matrix multiplication [1 0 h; 0 1 k; 0 0 1][x; y; 1], which turns an affine move into a linear one. Rotation by θ about the origin is [cos θ −sin θ 0; sin θ cos θ 0; 0 0 1]. Compositions of moves are products of these matrices, applied right to left.</p>
<div class="note"><b>Notable points.</b> Rotation about a point P is translate P to the origin, rotate, then translate back. The order of the matrices matters because matrix multiplication is not commutative.</div>`]],
pr:[
["Compute AB and BA for A = [1 2; 3 4] and B = [0 1; 1 0].","AB = [2 1; 4 3] (the columns of A swapped) and BA = [3 4; 1 2] (the rows of A swapped). They differ, so AB ≠ BA."],
["Find the inverse of A = [1 2; 3 7] and use it to solve Ax = (1, 2).","ad − bc = 7 − 6 = 1, so A⁻¹ = [7 −2; −3 1]. Then x = A⁻¹(1, 2) = (7 − 4, −3 + 2) = (3, −1). Check: 3 − 2 = 1 and 9 − 7 = 2."],
["If A² − 3A + I = 0, show that A is invertible and find A⁻¹.","Rewrite as A(3I − A) = I. By the Invertible Matrix Theorem (AD = I with D = 3I − A), A is invertible and A⁻¹ = 3I − A."],
["Find an LU factorization of A = [1 2; 3 7].","R2 − 3R1 gives U = [1 2; 0 1]. The multiplier is 3, so L = [1 0; 3 1]. Check: row 2 of LU is 3(1, 2) + (0, 1) = (3, 7)."],
["A = [1 2 0 1; 0 0 1 3; 0 0 0 0]. Find rank A and dim Nul A.","There are 2 pivot columns (1 and 3), so rank A = 2. Free variables x₂ and x₄ give dim Nul A = 2. Check: 2 + 2 = 4 columns."],
["Is [1 2; 2 4] invertible?","No: ad − bc = 4 − 4 = 0. Equivalently the second column is twice the first, so the columns are dependent."]],
pb:(typeof P2!=="undefined"?P2:[]),
qz:[["(AB)ᵀ equals…",["AᵀBᵀ","BᵀAᵀ","ABᵀ","BAᵀ"],1],
["For a square matrix A, which statement does NOT imply that A is invertible?",["A has n pivot positions","Ax = 0 has only the trivial solution","The echelon form of A has a zero row","The columns of A span ℝⁿ"],2],
["A is 5×8 with rank 3. Then dim Nul A equals…",["3","5","8","2"],1],
["If A and B are invertible, (AB)⁻¹ equals…",["A⁻¹B⁻¹","B⁻¹A⁻¹","(A⁻¹)ᵀ(B⁻¹)ᵀ","AB"],1]],
sb:[["Prove that if A and B are invertible n×n matrices, then (AB)⁻¹ = B⁻¹A⁻¹.","(AB)(B⁻¹A⁻¹) = A(BB⁻¹)A⁻¹ = AA⁻¹ = I and (B⁻¹A⁻¹)(AB) = B⁻¹(A⁻¹A)B = B⁻¹B = I. So B⁻¹A⁻¹ is the inverse of AB."],
["Use row reduction on [A I] to find A⁻¹ for A = [1 1; 2 3].","[1 1 | 1 0; 2 3 | 0 1]. R2 − 2R1: [1 1 | 1 0; 0 1 | −2 1]. R1 − R2: [1 0 | 3 −1; 0 1 | −2 1]. So A⁻¹ = [3 −1; −2 1]."],
["Prove that if A² = 0, then I − A is invertible with inverse I + A.","(I − A)(I + A) = I + A − A − A² = I − A² = I, and (I + A)(I − A) = I − A² = I. So I + A is the inverse of I − A."]]};
