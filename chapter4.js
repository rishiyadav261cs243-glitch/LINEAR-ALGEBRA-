var C4={n:4,title:"Vector spaces",
sec:[
["4.1 Vector spaces and subspaces","Axioms, examples, subspace test",`
<p>A <b>vector space</b> is a nonempty set V with addition and scalar multiplication satisfying ten axioms: closure under both operations, commutativity and associativity of addition, a zero vector, additive inverses, two distributive laws, (cd)u = c(du), and 1u = u. Examples: ℝⁿ, the polynomials Pₙ of degree ≤ n, the matrices M<sub>m×n</sub>, and the continuous functions C[a, b].</p>
<p><b>Theorem 1.</b> In any vector space, 0u = 0, c0 = 0 and (−1)u = −u.</p>
<details><summary>Proof of 0u = 0</summary><p>0u = (0 + 0)u = 0u + 0u. Add the inverse −(0u) to both sides: 0 = 0u. For (−1)u: u + (−1)u = (1 + (−1))u = 0u = 0, so (−1)u is the additive inverse of u. ∎</p></details>
<p>A <b>subspace</b> H of V is a subset that (a) contains 0, (b) is closed under addition, and (c) is closed under scalar multiplication. Then H is itself a vector space.</p>
<p><b>Theorem 2.</b> For v₁, …, vₚ in V, Span{v₁, …, vₚ} is a subspace of V.</p>
<details><summary>Proof</summary><p>0 = 0v₁ + … + 0vₚ is in the span. If u = Σaᵢvᵢ and w = Σbᵢvᵢ, then u + w = Σ(aᵢ + bᵢ)vᵢ and cu = Σ(caᵢ)vᵢ, both in the span. ∎</p></details>
<div class="note"><b>Notable points.</b> Always check 0 first: a set missing 0 is not a subspace, such as {p in P₂ : p(0) = 1}. The set {(x, y) : xy ≥ 0} fails closure under addition. {0} and V itself are always subspaces. The union of two subspaces is usually not a subspace.</div>`],
["4.2 Null spaces, column spaces and linear transformations","Nul A, Col A, kernel and range",`
<p>For an m×n matrix A: <b>Nul A</b> = {x in ℝⁿ : Ax = 0} (a subspace of ℝⁿ), <b>Col A</b> = Span of the columns (a subspace of ℝᵐ), and <b>Row A</b> = Span of the rows (a subspace of ℝⁿ). Also Col A = {b : Ax = b is consistent}.</p>
<p><b>Theorem 3.</b> Nul A is a subspace of ℝⁿ.</p>
<details><summary>Proof</summary><p>A0 = 0, so 0 is in Nul A. If Au = 0 and Av = 0, then A(u + v) = Au + Av = 0 and A(cu) = c(Au) = 0. ∎</p></details>
<p>A map T: V → W is <b>linear</b> if T(u + v) = T(u) + T(v) and T(cu) = cT(u). Its <b>kernel</b> is {v : T(v) = 0} and its <b>range</b> is {T(v) : v in V}. Both are subspaces (of V and W respectively).</p>
<p><b>Theorem 4.</b> A linear transformation T is one-to-one if and only if ker T = {0}.</p>
<details><summary>Proof</summary><p>If T is one-to-one and T(v) = 0 = T(0), then v = 0. Conversely, if ker T = {0} and T(u) = T(v), then T(u − v) = 0, so u − v = 0 and u = v. ∎</p></details>
<div class="note"><b>Notable points.</b> Nul A lives in ℝⁿ (the number of columns), Col A in ℝᵐ. Row operations do not change Nul A or Row A, but they do change Col A. For T(x) = Ax, ker T = Nul A and range T = Col A.</div>`],
["4.3 Bases and linearly independent sets","Spanning Set Theorem, bases of Col A and Row A",`
<p>Vectors v₁, …, vₚ in V are <b>linearly independent</b> if c₁v₁ + … + cₚvₚ = 0 only when all cᵢ = 0. A <b>basis</b> of V is a linearly independent set that spans V. Example: {1, t, t², …, tⁿ} is a basis for Pₙ.</p>
<p><b>Theorem 5 (Spanning Set Theorem).</b> If S = {v₁, …, vₚ} spans H and some vₖ is a linear combination of the others, then S without vₖ still spans H. If H ≠ {0}, some subset of S is a basis for H.</p>
<details><summary>Proof</summary><p>Say vₖ = Σ<sub>i≠k</sub> aᵢvᵢ. Any vector in H is Σcᵢvᵢ. Replace vₖ by Σ aᵢvᵢ to rewrite it using only the other vectors. Repeat removing dependent vectors until the set is independent. ∎</p></details>
<p><b>Theorem 6.</b> The pivot columns of A form a basis of Col A. The nonzero rows of an echelon form of A form a basis of Row A.</p>
<div class="note"><b>Notable points.</b> Take the pivot columns from the original A, not from the echelon form. A basis for Nul A comes from the free variables in the parametric vector form of the solution of Ax = 0. A basis is a minimal spanning set and a maximal independent set.</div>`],
["4.4 Coordinate systems","Coordinates relative to a basis",`
<p><b>Theorem 7 (Unique Representation).</b> If B = {b₁, …, bₙ} is a basis of V, every x in V can be written uniquely as x = c₁b₁ + … + cₙbₙ. The <b>coordinate vector</b> of x relative to B is [x]<sub>B</sub> = (c₁, …, cₙ).</p>
<details><summary>Proof</summary><p>Existence holds since B spans V. If x = Σcᵢbᵢ = Σdᵢbᵢ, subtracting gives Σ(cᵢ − dᵢ)bᵢ = 0, and independence forces cᵢ = dᵢ. ∎</p></details>
<p><b>Theorem 8.</b> The coordinate map x ↦ [x]<sub>B</sub> is a one-to-one linear transformation from V onto ℝⁿ.</p>
<details><summary>Proof</summary><p>If x = Σcᵢbᵢ and y = Σdᵢbᵢ, then x + y = Σ(cᵢ + dᵢ)bᵢ and kx = Σ(kcᵢ)bᵢ, so the map preserves sums and scalars. It is one-to-one by uniqueness and onto since any (c₁, …, cₙ) is the coordinate vector of Σcᵢbᵢ. ∎</p></details>
<p>Example: B = {1, 1 + t, 1 + t + t²} and p(t) = 3 − t + 2t². Solving a + b(1 + t) + c(1 + t + t²) = p gives c = 2, b = −3, a = 4, so [p]<sub>B</sub> = (4, −3, 2).</p>
<div class="note"><b>Notable points.</b> The coordinate map lets you turn questions about polynomials, matrices or functions into questions about ℝⁿ. Independence, spanning and dimension are all preserved. Different bases give different coordinates for the same vector.</div>`],
["4.5 Dimension","Basis size, Basis Theorem",`
<p><b>Theorem 9.</b> If V has a basis of n vectors, then any set in V with more than n vectors is linearly dependent.</p>
<details><summary>Proof</summary><p>Let B be a basis with n vectors and u₁, …, uₚ in V with p &gt; n. The coordinate vectors [u₁]<sub>B</sub>, …, [uₚ]<sub>B</sub> are p vectors in ℝⁿ, hence dependent: Σcⱼ[uⱼ]<sub>B</sub> = 0 for some nontrivial c. By linearity [Σcⱼuⱼ]<sub>B</sub> = 0, so Σcⱼuⱼ = 0 since the coordinate map is one-to-one. ∎</p></details>
<p><b>Theorem 10.</b> Every basis of V has the same number of vectors. This number is the <b>dimension</b> dim V.</p>
<details><summary>Proof</summary><p>Suppose B has n vectors and C has p vectors, and both are bases. Theorem 9 with B as the basis shows p ≤ n (more than n vectors would be dependent), and with C as the basis shows n ≤ p. ∎</p></details>
<p><b>Theorem 11 (Basis Theorem).</b> If dim V = p, any linearly independent set of p vectors in V is a basis, and any set of p vectors that spans V is a basis. If H is a subspace of a finite-dimensional V, then dim H ≤ dim V, with equality only when H = V.</p>
<div class="note"><b>Notable points.</b> dim ℝⁿ = n, dim Pₙ = n + 1, dim M<sub>m×n</sub> = mn. dim {0} = 0. A plane through the origin in ℝ³ has dimension 2, and a line has dimension 1. The space of all polynomials is infinite-dimensional.</div>`],
["4.6 Rank","Rank Theorem and the Invertible Matrix Theorem",`
<p><b>Theorem 12 (Rank Theorem).</b> For an m×n matrix A, rank A = dim Col A = dim Row A, and rank A + dim Nul A = n.</p>
<details><summary>Proof</summary><p>Pivot columns form a basis of Col A, so rank A is the number of pivots. Non-pivot columns correspond to free variables, which give a basis of Nul A, so dim Nul A = number of free variables. Pivots plus free variables equal n. The nonzero rows of an echelon form form a basis of Row A, and there is one per pivot, so dim Row A = number of pivots. ∎</p></details>
<p><b>Invertible Matrix Theorem (additions).</b> For an n×n matrix A, A is invertible if and only if the columns of A form a basis of ℝⁿ, if and only if Col A = ℝⁿ, rank A = n, dim Nul A = 0, or Nul A = {0}.</p>
<div class="note"><b>Notable points.</b> rank A = rank Aᵀ. A 7×9 matrix of rank 5 has dim Nul A = 4, dim Col A = dim Row A = 5, and dim Nul Aᵀ = 7 − 5 = 2. An m×n matrix has rank at most min(m, n). The rank of a product satisfies rank(AB) ≤ min(rank A, rank B).</div>`],
["4.7 Change of basis","Change-of-coordinates matrices",`
<p>Let B = {b₁, …, bₙ} and C = {c₁, …, cₙ} be bases of V. The <b>change-of-coordinates matrix from B to C</b> is P<sub>C←B</sub> = [ [b₁]<sub>C</sub> … [bₙ]<sub>C</sub> ], and it satisfies [x]<sub>C</sub> = P<sub>C←B</sub>[x]<sub>B</sub>.</p>
<details><summary>Why it works</summary><p>If x = Σxⱼbⱼ, then [x]<sub>C</sub> = Σxⱼ[bⱼ]<sub>C</sub> by linearity of the coordinate map. This is exactly the matrix product P<sub>C←B</sub>[x]<sub>B</sub>. ∎</p></details>
<p><b>Theorem 13.</b> P<sub>C←B</sub> is invertible and its inverse is P<sub>B←C</sub>.</p>
<p><b>Computing.</b> To find P<sub>C←B</sub> in ℝⁿ, row reduce [c₁ … cₙ | b₁ … bₙ] to [I | P<sub>C←B</sub>]. Example: B = {(1, 2), (3, 5)}, C = {(1, 1), (1, −1)}. Solving gives (1, 2) = (3/2)(1, 1) − (1/2)(1, −1) and (3, 5) = 4(1, 1) − 1(1, −1), so P<sub>C←B</sub> = [3/2 4; −1/2 −1].</p>
<div class="note"><b>Notable points.</b> The standard-basis case is easy: P<sub>E←B</sub> = [b₁ … bₙ]. Change of basis is how a linear map gets a simpler matrix, which leads to diagonalization in Chapter 5.</div>`],
["4.8 Difference equations and Markov chains","Two applications",`
<p><b>Difference equations.</b> A sequence (yₖ) satisfying yₖ₊₂ + a yₖ₊₁ + b yₖ = 0 for all k has solutions forming a 2-dimensional subspace of the space of sequences, because (y₀, y₁) determines the entire sequence. Try yₖ = rᵏ: r² + ar + b = 0. Distinct roots r₁, r₂ give the general solution yₖ = c₁r₁ᵏ + c₂r₂ᵏ.</p>
<p>Example: yₖ₊₂ − 5yₖ₊₁ + 6yₖ = 0 has roots 2 and 3. With y₀ = 1 and y₁ = 0: c₁ + c₂ = 1 and 2c₁ + 3c₂ = 0, so c₁ = 3, c₂ = −2 and yₖ = 3·2ᵏ − 2·3ᵏ.</p>
<p><b>Markov chains.</b> A <b>stochastic matrix</b> P has nonnegative entries and each column sums to 1. A chain is xₖ₊₁ = Pxₖ. A <b>steady-state vector</b> q is a probability vector with Pq = q. For a regular stochastic matrix (some power has all positive entries), there is a unique steady-state vector q, and xₖ → q for any initial probability vector.</p>
<p>Example: P = [0.7 0.4; 0.3 0.6]. Solve (P − I)q = 0: −0.3q₁ + 0.4q₂ = 0 gives q = (4/7, 3/7).</p>
<div class="note"><b>Notable points.</b> The steady state is an eigenvector of P for eigenvalue 1 (Chapter 5). The entries of a probability vector are nonnegative and add to 1. The convergence statement for regular chains is stated here without proof.</div>`]],
pr:[
["Show that H = {(x, y, z) : x + y + z = 0} is a subspace of ℝ³ and find a basis.","H = Nul [1 1 1], a null space, so it is a subspace. Solving x = −y − z gives (x, y, z) = y(−1, 1, 0) + z(−1, 0, 1). Basis {(−1, 1, 0), (−1, 0, 1)}, so dim H = 2."],
["For A = [1 2 −1 0; 2 4 0 6; 3 6 −1 6], find bases for Nul A and Col A.","R2 − 2R1 = (0, 0, 2, 6), R3 − 3R1 = (0, 0, 2, 6), so R3 − R2 = 0. Pivot columns are 1 and 3, so a basis of Col A is {(1, 2, 3), (−1, 0, −1)}. Free variables x₂, x₄ give x₃ = −3x₄, x₁ = −2x₂ − 3x₄, so Nul A has basis {(−2, 1, 0, 0), (−3, 0, −3, 1)}. rank 2, nullity 2."],
["Find [p]_B for p(t) = 3 − t + 2t² and B = {1, 1 + t, 1 + t + t²}.","Solve a + b(1 + t) + c(1 + t + t²) = 3 − t + 2t². Coefficient of t²: c = 2. Of t: b + c = −1, so b = −3. Constant: a + b + c = 3, so a = 4. [p]_B = (4, −3, 2)."],
["Find the change-of-coordinates matrix from B = {(1, 2), (3, 5)} to C = {(1, 1), (1, −1)}.","(1, 2) = (3/2)(1, 1) − (1/2)(1, −1) and (3, 5) = 4(1, 1) − (1, −1). The columns are (3/2, −1/2) and (4, −1), so P = [3/2 4; −1/2 −1]."],
["A is 7×9 with rank 5. Find dim Nul A, dim Col A, dim Row A and dim Nul Aᵀ.","dim Col A = dim Row A = 5. dim Nul A = 9 − 5 = 4. dim Nul Aᵀ = 7 − 5 = 2."],
["Solve yₖ₊₂ − 5yₖ₊₁ + 6yₖ = 0 with y₀ = 1, y₁ = 0.","Roots 2 and 3, so yₖ = c₁2ᵏ + c₂3ᵏ. Then c₁ + c₂ = 1, 2c₁ + 3c₂ = 0 give c₁ = 3, c₂ = −2. So yₖ = 3·2ᵏ − 2·3ᵏ. Check: y₀ = 1, y₁ = 6 − 6 = 0."]],
pb:(typeof P4!=="undefined"?P4:[]),
qz:[["Which of these is a subspace of ℝ²?",["{(x, y) : x ≥ 0}","{(x, y) : x = 2y}","{(x, y) : x + y = 1}","{(x, y) : xy = 0}"],1],
["The dimension of P₃ (polynomials of degree at most 3) is…",["3","4","5","Infinite"],1],
["A is 6×9 with rank 4. Then dim Nul A equals…",["2","4","5","6"],2],
["If B is a basis of V, each x in V can be written as a combination of B in…",["Exactly one way","No way","Infinitely many ways","At most two ways"],0]],
sb:[["Prove that Nul A is a subspace of ℝⁿ.","A0 = 0, so 0 is in Nul A. If Au = 0 and Av = 0, then A(u + v) = Au + Av = 0. If Au = 0 and c is a scalar, then A(cu) = c(Au) = 0. All three subspace conditions hold."],
["Prove that any two bases of a vector space have the same number of vectors.","Let B = {b₁, …, bₙ} and C = {c₁, …, cₚ} be bases with p > n. The coordinate vectors [cⱼ]_B are p vectors in ℝⁿ, so they are dependent. The coordinate map is linear and one-to-one, so the cⱼ are dependent, contradicting that C is a basis. So p ≤ n. By symmetry n ≤ p, hence n = p."],
["Find a basis and the dimension of {(x, y, z) : x − 2y + z = 0}.","Solve x = 2y − z, so (x, y, z) = y(2, 1, 0) + z(−1, 0, 1). The vectors (2, 1, 0) and (−1, 0, 1) are independent and span the set, so they form a basis and the dimension is 2."]]};
